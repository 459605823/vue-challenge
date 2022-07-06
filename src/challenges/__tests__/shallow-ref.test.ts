import { describe, test } from "vitest";

describe("shallow ref", () => {
  const state = shallowRef({ count: 1 });
  const result = ref(0);
  watch(
    state,
    () => {
      result.value = state.value.count;
    },
    { deep: true }
  );
  test("not reactive", () => {
    state.value.count = 2;
    expect(result.value).not.toBe(2);
  });
  test("shallow reactive", async () => {
    state.value = { count: 2 };
    await nextTick();
    expect(result.value).toBe(2);
  });
});
