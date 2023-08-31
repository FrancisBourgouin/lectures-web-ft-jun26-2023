const { expect } = require("chai");
const calculateCart = require("./calculateCart"); // Replace with the actual path to your function

describe("calculateCart", () => {
  it("throws an error for invalid price", () => {
    const cartWithInvalidPrice = [
      { name: "Item 1", price: -10 },
      { name: "Item 2", price: "invalid" },
    ];
    expect(() => calculateCart(cartWithInvalidPrice, 10, 0.1)).to.throw("Invalid price");
  });

  it("throws an error if no cart or tax percentage", () => {
    const emptyCart = [];
    expect(() => calculateCart(emptyCart, 10, 0.1)).to.throw(
      "Cart and tax details are required"
    );

    const noTaxPercentage = [{ name: "Item 1", price: 10 }];
    expect(() => calculateCart(noTaxPercentage, 10)).to.throw(
      "Cart and tax details are required"
    );
  });

  it("throws an error for empty cart", () => {
    const emptyCart = [];
    expect(() => calculateCart(emptyCart, 10, 0.1)).to.throw("Cart is empty");
  });

  it("calculates cart totals with items and tax", () => {
    const cartWithItems = [
      { name: "Item 1", price: 10 },
      { name: "Item 2", price: 20 },
    ];
    const taxPercentage = 0.1;
    const result = calculateCart(cartWithItems, 10, taxPercentage);

    expect(result).to.have.property("subtotal").that.equals(30);
    expect(result).to.have.property("total").that.equals(33);
    expect(result).to.have.property("tax").that.equals(3);
    expect(result).to.have.property("itemsCount").that.equals(2);
  });
});
