import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("Ceil", () => {
  it("round number up to 0.01 accuracy", () => {
    expect(ceil(2.005, 2)).to.equal(2.01);
  });
  it("round up a bigger number", () => {
    expect(ceil(22412.001, 2)).to.equal(22412.01);
  });
});
