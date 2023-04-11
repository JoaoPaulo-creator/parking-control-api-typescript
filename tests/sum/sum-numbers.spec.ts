import { expect, it } from "vitest";

it("should sum two numbers", async () => {
  let n1 = 2;
  let n2 = 2;
  let result = n1 + n2;
  expect(result).toEqual(4);
});
