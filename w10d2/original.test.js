const expect = require("chai").expect;
const calculateCart = require("../calculateCart");

describe("calculateCart function", () => {
  it("should skip the item if it's malformed or the price is not a number", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: "ONE DOLLAR",
      },
      {
        id: 2,
        name: "Chicken",
        icon: "🐔",
        price: 9.99,
      },
    ];

    const taxPercentage = 0.14975;

    const result = calculateCart(cart, taxPercentage);

    expect(result.amountOfItems).to.equal(1);
    expect(result.subtotal).to.equal(9.99);
  });
  it("should throw an error if there is no cart or no tax percentage", () => {
    const cart = [
      {
        id: 2,
        name: "Chicken",
        icon: "🐔",
        price: 9.99,
      },
    ];

    const taxPercentage = 0.14975;

    const throwyFunction = () => calculateCart(null, taxPercentage);

    expect(throwyFunction).to.throw("HEY DON'T FORGET THE CART!");

    const anotherThrowyFunction = () => calculateCart(cart, null);

    expect(anotherThrowyFunction).to.throw("HEY WHERE'S THE TAX DUDE!");
  });
  it("should throw an error if the cart is empty", () => {
    const sadCart = [];
    const taxPercentage = 0.14975;

    const throwyFunction = () => calculateCart(sadCart, taxPercentage);

    expect(throwyFunction).to.throw("WHY IS THE CART EMPTY!");
  });
  it("should output the proper object when given a valid cart and tax percentage", () => {
    const cart = [
      {
        id: 1,
        name: "Potato",
        icon: "🥔",
        price: 0.99,
      },
      {
        id: 2,
        name: "Chicken",
        icon: "🐔",
        price: 9.99,
      },
    ];

    const taxPercentage = 0.14975;

    const expectedOutput = {
      amountOfItems: 2,
      subtotal: 10.98,
      taxAmount: 1.64,
      total: 12.62,
    };

    const result = calculateCart(cart, taxPercentage);

    expect(result).to.deep.equal(expectedOutput);
  });
});
