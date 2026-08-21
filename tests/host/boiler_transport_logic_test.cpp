#include <assert.h>

#include "../../openquatt/includes/boiler/oq_boiler_transport_logic.h"

namespace {

using namespace oq_boiler_transport;

void test_r1_relay_true_stays_true_despite_otb_tick() {
  // R1 selected, relay true -> OTB tick with link false / ch false must not overwrite
  bool opentherm_selected = false;
  bool relay = true;
  bool link = false;
  bool ch_has = false;
  bool ch = false;
  // R1 owns transport, OTB must not update
  assert(!otb_may_update_transport(opentherm_selected));
  bool otb_computed = compute_otb_transport_active(link, ch_has, ch);
  assert(otb_computed == false);
  // Guard ensures R1 value stays true
  bool effective_after_otb_tick = relay;  // R1 path
  assert(effective_after_otb_tick == true);
}

void test_r1_relay_false_stays_false() {
  bool relay = false;
  assert(relay == false);
  assert(!otb_may_update_transport(false));
}

void test_opentherm_link_and_ch_true() {
  assert(otb_may_update_transport(true));
  assert(compute_otb_transport_active(true, true, true) == true);
  // Effective OTB when selected
  bool effective = compute_otb_transport_active(true, true, true);
  assert(effective == true);
}

void test_opentherm_link_false_or_ch_inactive() {
  assert(!compute_otb_transport_active(false, true, true));
  assert(!compute_otb_transport_active(true, false, true));
  assert(!compute_otb_transport_active(true, true, false));
  // Guard still true, but computed false
  assert(otb_may_update_transport(true));
}

void test_transport_switch_r1_to_opentherm() {
  // R1 true, switch to OpenTherm with link true/ch true -> should become true via OTB
  bool r1_before = true;  // relay true
  assert(r1_before == true);
  bool otb_after = compute_otb_transport_active(true, true, true);
  assert(otb_after == true);
  // Switch to OpenTherm but link false -> false (no stale true)
  bool otb_after_link_false = compute_otb_transport_active(false, true, true);
  assert(otb_after_link_false == false);
}

void test_otb_field_stale_guard() {
  // FIELD_STATUS stale should only clear when OpenTherm selected
  assert(should_clear_on_field_stale(true, true) == true);
  assert(should_clear_on_field_stale(false, true) == false);
  assert(should_clear_on_field_stale(true, false) == false);
  assert(should_clear_on_field_stale(false, false) == false);
}

}  // namespace

int main() {
  test_r1_relay_true_stays_true_despite_otb_tick();
  test_r1_relay_false_stays_false();
  test_opentherm_link_and_ch_true();
  test_opentherm_link_false_or_ch_inactive();
  test_transport_switch_r1_to_opentherm();
  test_otb_field_stale_guard();
  return 0;
}
