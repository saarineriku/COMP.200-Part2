import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("Capitalize", () => {
  it("Capitalized test", () => {
    expect(capitalize("Asdasd@email.com")).to.equal("Asdasd@email.com");
  });
  it("Uppercase test", () => {
    expect(capitalize("ASDASD@EMAIL.com")).to.equal("Asdasd@email.com");
  });
    it("Lowercase test", () => {
    expect(capitalize("asdasd@email.com")).to.equal("Asdasd@email.com");
  });
});
