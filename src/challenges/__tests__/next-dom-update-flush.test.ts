/* eslint-disable @typescript-eslint/ban-ts-comment */

import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
const Counter = {
  template: `
      <p>Count: {{ count }}</p>
      <button @click="handleClick">Increment</button>
    `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      // @ts-ignore
      this.count += 1;
    },
  },
};

describe("dom update flush", () => {
  test("increments by 1", async () => {
    const wrapper = mount(Counter);

    wrapper.find("button").trigger("click");

    await nextTick();

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<p>Count: 1</p>
      <button>Increment</button>"
    `);
  });
});
