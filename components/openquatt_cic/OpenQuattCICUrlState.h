#pragma once

#include <stddef.h>
#include <stdint.h>

namespace esphome::openquatt_cic {

class OpenQuattCICUrlState {
 public:
  bool update(const char* url, size_t length) {
    const uint64_t identity = url_identity_(url, length);
    if (identity == this->configured_identity_) return false;

    this->configured_identity_ = identity;
    this->successful_generation_ = 0;
    this->generation_++;
    if (this->generation_ == 0) this->generation_ = 1;
    return true;
  }

  uint32_t generation() const { return this->generation_; }

  bool accepts(uint32_t generation) const { return generation != 0 && generation == this->generation_; }

  bool mark_success(uint32_t generation) {
    if (!this->accepts(generation)) return false;
    this->successful_generation_ = generation;
    return true;
  }

  bool ready(const char* url, size_t length) const {
    return length > 0 && url_identity_(url, length) == this->configured_identity_ &&
           this->successful_generation_ == this->generation_;
  }

 private:
  static uint64_t url_identity_(const char* url, size_t length) {
    if (url == nullptr || length == 0) return 0;
    uint64_t hash = 14695981039346656037ULL;
    for (size_t index = 0; index < length; index++) {
      hash = (hash ^ static_cast<uint8_t>(url[index])) * 1099511628211ULL;
    }
    return hash == 0 ? 1 : hash;
  }

  uint64_t configured_identity_{0};
  uint32_t generation_{1};
  uint32_t successful_generation_{0};
};

}  // namespace esphome::openquatt_cic
