import { describe, it, expect } from "vitest";

describe("losing reactivity", () => {
  function useCount() {
    const state = reactive({
      count: 0,
    });
    function update(value: number) {
      state.count = value;
    }
    return {
      state: toRefs(state),
      update,
    };
  }
  const {
    state: { count },
    update,
  } = useCount();
  it("isref", () => {
    expect(isRef(count)).toBe(true);
  });
  it("update", () => {
    update(1);
    expect(count.value).toBe(1);
  });
});
