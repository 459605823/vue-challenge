import { describe, test } from "vitest";

describe("writable computed", () => {
  const count = ref(1);
  test("is writable", () => {
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val - 1;
      },
    });
    plusOne.value = 1;
    expect(plusOne.value).toBe(1);
  });
});
