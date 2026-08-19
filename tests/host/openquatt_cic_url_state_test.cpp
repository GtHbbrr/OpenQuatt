#include <assert.h>

#include "../../components/openquatt_cic/OpenQuattCICUrlState.h"

int main() {
  using esphome::openquatt_cic::OpenQuattCICUrlState;
  constexpr char URL_A[] = "http://cic-a/feed";
  constexpr char URL_B[] = "http://cic-b/feed";

  OpenQuattCICUrlState state;
  assert(!state.ready(URL_A, sizeof(URL_A) - 1));

  assert(state.update(URL_A, sizeof(URL_A) - 1));
  const uint32_t generation_a = state.generation();
  assert(!state.ready(URL_A, sizeof(URL_A) - 1));
  assert(state.mark_success(generation_a));
  assert(state.ready(URL_A, sizeof(URL_A) - 1));

  assert(!state.update(URL_A, sizeof(URL_A) - 1));
  assert(state.ready(URL_A, sizeof(URL_A) - 1));

  assert(state.update(URL_B, sizeof(URL_B) - 1));
  const uint32_t generation_b = state.generation();
  assert(generation_b != generation_a);
  assert(!state.ready(URL_A, sizeof(URL_A) - 1));
  assert(!state.ready(URL_B, sizeof(URL_B) - 1));
  assert(!state.accepts(generation_a));
  assert(!state.mark_success(generation_a));
  assert(state.mark_success(generation_b));
  assert(state.ready(URL_B, sizeof(URL_B) - 1));

  assert(state.update("", 0));
  assert(!state.ready(URL_B, sizeof(URL_B) - 1));
  assert(!state.ready("", 0));
  assert(!state.mark_success(generation_b));
  return 0;
}
