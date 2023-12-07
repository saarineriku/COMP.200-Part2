import { describe, it } from "mocha";
import { assert, expect } from "chai";
import filter from "../src/filter.js"; // path to funtion

describe("filter function", function () {
  const products = [
    { product: "milk", category: "drink", price: 2.0 },
    { product: "soda", category: "drink", price: 3.0 },
    { product: "sandwich", category: "snack", price: 4.0 },
  ];

  it("should filter elements based on the category", function () {
    // Filter active users
    const result1 = filter(products, ({ category }) => category == "drink");
    assert.deepEqual(result1, [
      { product: "milk", category: "drink", price: 2.0 },
      { product: "soda", category: "drink", price: 3.0 },
    ]);

    // Filter users with the letter 'a' in their name
    const result2 = filter(products, ({ category }) => category.includes("a"));
    expect(result2).to.deep.equal([
      { product: "sandwich", category: "snack", price: 4.0 },
    ]);
  });

  it("should filter elements by their prize", function () {
    const result3 = filter(products, ({ price }) => price < 4.0);
    expect(result3).to.deep.equal([
      { product: "milk", category: "drink", price: 2.0 },
      { product: "soda", category: "drink", price: 3.0 },
    ]);

    const result4 = filter(products, ({ price }) => price >= 3.0);
    expect(result4).to.deep.equal([
      { product: "soda", category: "drink", price: 3.0 },
      { product: "sandwich", category: "snack", price: 4.0 },
    ]);
  });
});
