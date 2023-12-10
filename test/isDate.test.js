import { expect } from "chai";
import isDate from "../src/isDate.js";

describe("IsDate", () => {
  it("Date object test", () => {
    expect(isDate(new Date)).to.equal(true);
  });
  it("Wrong object test (string)", () => {
    expect(isDate("5.12.2023")).to.equal(false);
  });
    it("Wrong object test (number)", () => {
    expect(isDate(5)).to.equal(false);
  });
});
