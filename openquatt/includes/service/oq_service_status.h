#pragma once

#include <string>

namespace oq_service_status {

inline void set(std::string &target, const char *value) {
  target = value != nullptr ? value : "";
}

inline void set(std::string &target, const std::string &value) {
  target = value;
}

inline void set_commissioning(const char *value) { set(id(oq_commissioning_status_value), value); }
inline void set_commissioning(const std::string &value) { set(id(oq_commissioning_status_value), value); }

inline void set_boiler_power_test(const char *value) { set(id(oq_boiler_power_test_status_value), value); }
inline void set_boiler_power_test(const std::string &value) { set(id(oq_boiler_power_test_status_value), value); }

inline void set_flow_autotune(const char *value) { set(id(oq_flow_autotune_status_value), value); }
inline void set_flow_autotune(const std::string &value) { set(id(oq_flow_autotune_status_value), value); }

inline void set_air_purge(const char *value) { set(id(oq_air_purge_status_value), value); }
inline void set_air_purge(const std::string &value) { set(id(oq_air_purge_status_value), value); }

inline void set_manual_flow(const char *value) { set(id(oq_manual_flow_status_value), value); }
inline void set_manual_flow(const std::string &value) { set(id(oq_manual_flow_status_value), value); }

inline void set_manual_hp(const char *value) { set(id(oq_manual_hp_status_value), value); }
inline void set_manual_hp(const std::string &value) { set(id(oq_manual_hp_status_value), value); }

inline void set_manual_hp_guard(const char *value) { set(id(oq_manual_hp_guard_status_value), value); }
inline void set_manual_hp_guard(const std::string &value) { set(id(oq_manual_hp_guard_status_value), value); }

inline void set_hp_water_calibration(const char *value) { set(id(oq_hp_water_calibration_status_value), value); }
inline void set_hp_water_calibration(const std::string &value) { set(id(oq_hp_water_calibration_status_value), value); }

}  // namespace oq_service_status
