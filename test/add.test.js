// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
import { expect as _expect } from "chai";
import add from "../src/add.js";
const expect = _expect;

describe("Add", () => {
  it("adds positive number to positive number", () => {
    expect(add(3, 6)).to.equal(9);
  });
  it("adds negative number to positive number", () => {
    expect(add(6, -3)).to.equal(3);
  });
});
