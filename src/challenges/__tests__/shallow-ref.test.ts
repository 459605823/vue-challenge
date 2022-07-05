import { describe, test } from "vitest";

describe("shallow ref", () => {
  const state = shallowRef({ count: 1 });
  const result = ref(0);
  watch(
    state,
    () => {
      console.log("state update");
      result.value = state.value.count;
      console.log(result.value);
    },
    { deep: true }
  );
  test("not reactive", () => {
    state.value.count = 2;
    expect(result.value).not.toBe(2);
  });
  test("shallow reactive", () => {
    state.value = { count: 2 };
    nextTick(() => {
      expect(result.value).toBe(2);
    });
  });
});
