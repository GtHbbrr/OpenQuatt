#pragma once

#include <cstdint>

namespace oq_incidents {

static constexpr uint32_t kManualResetStorageMagic = 0x4F51494EU;
static constexpr uint32_t kManualResetMarkerMagic = 0x4F51494DU;
static constexpr uint16_t kManualResetStorageVersion = 1U;
static constexpr uint8_t kManualResetHp1Mask = 1U << 0U;
static constexpr uint8_t kManualResetHp2Mask = 1U << 1U;
static constexpr uint8_t kManualResetAllHpMask =
    kManualResetHp1Mask | kManualResetHp2Mask;

struct ManualResetLatchStorage {
  uint32_t magic{kManualResetStorageMagic};
  uint16_t version{kManualResetStorageVersion};
  uint8_t latch_mask{0U};
  uint8_t reserved{0U};
};

struct ManualResetLatchMarker {
  uint32_t magic{kManualResetMarkerMagic};
  uint16_t version{kManualResetStorageVersion};
  uint16_t reserved{0U};
};

static_assert(sizeof(ManualResetLatchStorage) == 8U,
              "Manual-reset storage layout changed");
static_assert(sizeof(ManualResetLatchMarker) == 8U,
              "Manual-reset marker layout changed");

constexpr bool valid_manual_reset_storage(
    const ManualResetLatchStorage &storage) {
  return storage.magic == kManualResetStorageMagic &&
         storage.version == kManualResetStorageVersion &&
         (storage.latch_mask &
          static_cast<uint8_t>(~kManualResetAllHpMask)) == 0U;
}

constexpr bool valid_manual_reset_marker(
    const ManualResetLatchMarker &marker) {
  return marker.magic == kManualResetMarkerMagic &&
         marker.version == kManualResetStorageVersion;
}

constexpr uint8_t manual_reset_hp_mask(uint8_t hp_index) {
  return hp_index == 1U
             ? kManualResetHp1Mask
             : (hp_index == 2U ? kManualResetHp2Mask : 0U);
}

constexpr bool redundant_manual_reset_state_matches(
    bool storage_a_loaded, const ManualResetLatchStorage &storage_a,
    bool storage_b_loaded, const ManualResetLatchStorage &storage_b,
    bool marker_loaded, const ManualResetLatchMarker &marker,
    uint8_t expected_mask) {
  const uint8_t normalized_mask =
      expected_mask & kManualResetAllHpMask;
  return storage_a_loaded && storage_b_loaded && marker_loaded &&
         valid_manual_reset_storage(storage_a) &&
         valid_manual_reset_storage(storage_b) &&
         valid_manual_reset_marker(marker) &&
         storage_a.latch_mask == normalized_mask &&
         storage_b.latch_mask == normalized_mask;
}

class ManualResetLatchPersistencePolicy {
 public:
  enum class LoadResult : uint8_t {
    RESTORED = 0U,
    FRESH_INSTALL = 1U,
    RECOVERY_REQUIRED = 2U,
  };

  LoadResult load(bool storage_a_loaded,
                  const ManualResetLatchStorage &storage_a,
                  bool storage_b_loaded,
                  const ManualResetLatchStorage &storage_b,
                  bool marker_loaded,
                  const ManualResetLatchMarker &marker,
                  uint8_t configured_hp_mask) {
    this->configured_hp_mask_ =
        configured_hp_mask & kManualResetAllHpMask;
    this->pending_set_mask_ = 0U;
    this->persist_attempted_ = false;
    this->last_persist_attempt_ms_ = 0U;

    const bool storage_a_valid =
        storage_a_loaded && valid_manual_reset_storage(storage_a);
    const bool storage_b_valid =
        storage_b_loaded && valid_manual_reset_storage(storage_b);
    const bool marker_valid =
        marker_loaded && valid_manual_reset_marker(marker);
    if (storage_a_valid && storage_b_valid && marker_valid) {
      // A partially completed clear leaves one slot with the old bit. OR is
      // deliberately conservative: any disagreement keeps the latch active
      // until both copies are repaired.
      this->persisted_mask_ =
          storage_a.latch_mask | storage_b.latch_mask;
      this->ready_ = true;
      this->initialization_pending_ = false;
      this->metadata_repair_pending_ =
          storage_a.latch_mask != storage_b.latch_mask;
      this->recovery_required_ = false;
      this->load_failed_ = false;
      this->fault_mask_ = 0U;
      return LoadResult::RESTORED;
    }

    this->persisted_mask_ = 0U;
    this->ready_ = false;
    this->metadata_repair_pending_ = false;
    if (!storage_a_loaded && !storage_b_loaded && !marker_loaded) {
      // Two missing data records and a missing marker is the only state
      // treated as a fresh install/factory reset. Data slots are written
      // before the marker and initialization must be durable before HP
      // availability is released.
      this->initialization_pending_ = true;
      this->recovery_required_ = false;
      this->load_failed_ = false;
      this->fault_mask_ = this->configured_hp_mask_;
      return LoadResult::FRESH_INSTALL;
    }

    // Any partial initialization, missing redundant slot, invalid marker or
    // corrupt record leaves the old latch state unknowable. Conservatively
    // latch every configured HP and repair both slots plus the marker. The
    // repaired latch is released only through the normal per-HP physical
    // ODU power-cycle confirmation.
    this->persisted_mask_ = this->configured_hp_mask_;
    this->ready_ = false;
    this->initialization_pending_ = false;
    this->metadata_repair_pending_ = true;
    this->recovery_required_ = true;
    this->load_failed_ = false;
    this->fault_mask_ = this->configured_hp_mask_;
    return LoadResult::RECOVERY_REQUIRED;
  }

  void observe_runtime_latches(uint8_t runtime_mask) {
    const uint8_t new_latches =
        (runtime_mask & kManualResetAllHpMask) &
        static_cast<uint8_t>(~this->persisted_mask_);
    const uint8_t newly_pending =
        new_latches & static_cast<uint8_t>(~this->pending_set_mask_);
    if (newly_pending == 0U) return;
    this->pending_set_mask_ |= newly_pending;
    this->fault_mask_ |= newly_pending;
    // A new edge receives one immediate persistence attempt.
    this->persist_attempted_ = false;
  }

  bool should_attempt_persist(uint32_t now_ms,
                              uint32_t retry_interval_ms) const {
    if (!this->persistence_required_()) return false;
    return !this->persist_attempted_ ||
           static_cast<uint32_t>(now_ms -
                                 this->last_persist_attempt_ms_) >=
               retry_interval_ms;
  }

  uint8_t persistence_target_mask() const {
    return (this->persisted_mask_ | this->pending_set_mask_) &
           kManualResetAllHpMask;
  }

  void mark_persist_success(uint8_t persisted_mask, uint32_t now_ms) {
    this->persisted_mask_ =
        persisted_mask & kManualResetAllHpMask;
    this->pending_set_mask_ = 0U;
    this->ready_ = true;
    this->initialization_pending_ = false;
    this->metadata_repair_pending_ = false;
    this->recovery_required_ = false;
    this->load_failed_ = false;
    this->fault_mask_ = 0U;
    this->persist_attempted_ = true;
    this->last_persist_attempt_ms_ = now_ms;
  }

  void mark_persist_failure(uint32_t now_ms) {
    if (!this->ready_ || this->initialization_pending_) {
      this->fault_mask_ |= this->configured_hp_mask_;
    }
    this->fault_mask_ |= this->pending_set_mask_;
    this->persist_attempted_ = true;
    this->last_persist_attempt_ms_ = now_ms;
  }

  bool confirmation_target(uint8_t hp_index,
                           bool cleared_runtime_latch,
                           uint8_t *target_mask) const {
    const uint8_t hp_mask = manual_reset_hp_mask(hp_index);
    if (target_mask == nullptr || hp_mask == 0U ||
        (hp_mask & this->configured_hp_mask_) == 0U ||
        !cleared_runtime_latch || !this->ready_ ||
        this->load_failed_) {
      return false;
    }
    *target_mask =
        (this->persisted_mask_ | this->pending_set_mask_) &
        static_cast<uint8_t>(~hp_mask) & kManualResetAllHpMask;
    return true;
  }

  void mark_confirmation_failure(uint8_t hp_index, uint32_t now_ms) {
    this->fault_mask_ |= manual_reset_hp_mask(hp_index);
    this->persist_attempted_ = true;
    this->last_persist_attempt_ms_ = now_ms;
  }

  uint8_t persisted_mask() const { return this->persisted_mask_; }
  uint8_t fault_mask() const {
    return this->ready_ ? this->fault_mask_
                        : this->configured_hp_mask_;
  }
  bool ready() const { return this->ready_ && !this->load_failed_; }
  bool load_failed() const { return this->load_failed_; }
  bool recovery_required() const {
    return this->recovery_required_;
  }

 private:
  bool persistence_required_() const {
    return this->initialization_pending_ ||
           this->metadata_repair_pending_ ||
           this->pending_set_mask_ != 0U;
  }

  uint8_t configured_hp_mask_{0U};
  uint8_t persisted_mask_{0U};
  uint8_t pending_set_mask_{0U};
  uint8_t fault_mask_{0U};
  bool ready_{false};
  bool initialization_pending_{false};
  bool metadata_repair_pending_{false};
  bool recovery_required_{false};
  bool load_failed_{false};
  bool persist_attempted_{false};
  uint32_t last_persist_attempt_ms_{0U};
};

}  // namespace oq_incidents
