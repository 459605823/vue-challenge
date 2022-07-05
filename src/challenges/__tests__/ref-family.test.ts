import { describe, it, expect } from "vitest";

describe("ref family", () => {
  const count = ref(10);
  const state = reactive({
    foo: 1,
    bar: 2,
  });
  const foo = toRef(state, "foo");
  it("unref", () => {
    expect(unref(count)).toBe(10);
  });
  it("isRef", () => {
    expect(isRef(count)).toBe(true);
  });
  it("toRef", () => {
    foo.value++;
    expect(state.foo).toMatchInlineSnapshot("2");
    state.foo++;
    expect(foo.value).toMatchInlineSnapshot("3");
  });
});
