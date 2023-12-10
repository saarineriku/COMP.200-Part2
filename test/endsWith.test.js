import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("Ends with", () => {
  it("Correct string test", () => {
    expect(endsWith("address@email.com", "com")).to.equal(true);
  });
  it("Wrong string test", () => {
    expect(endsWith("address@email.com", "cn")).to.equal(false);
  });
  it("Nordic letters good input ", () => {
    expect(endsWith("ÖöÄäÅå", "Åå")).to.equal(true);
  });
  it("Nordic letters bad input ", () => {
    expect(endsWith("ÖöÄäÅå", "Oo")).to.equal(false);
  });
});
