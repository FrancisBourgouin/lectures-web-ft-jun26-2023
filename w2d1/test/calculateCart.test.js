// ### Goes wrong

// - What if cart was empty? => cart information works as expected, just with everything empty
// - What if the cart wasn't a cart? => THROW AN ERROR (try / catch)
// - What if the cart had invalid items? => Skip the invalid item
// - What if the cart had a weight exceeding 9001 kg => Stop adding new items

// ### Goes right

// - What if the cart received a proper cart array of objects => return cart information object with the info

const calculateCart = require("../calculateCart");
// const chai = require("chai");
// const expect = chai.expect;

const { expect } = require("chai");

describe("calculateCart when there is an issue with data", () => {
  it("should return cartInfo even if the cart is empty", () => {
    const expectedResult = {
      subtotal: 0,
      total: 0,
      tax: 0,
      amountOfItems: 0,
      cart: [],
    };
    const result = calculateCart([]);

    expect(result).to.deep.equal(expectedResult);
    // assert(result).equals(expectedResult);
  });
  it("should throw an error if the cart isnt an array", () => {
    const expectedResult = "Please give me an array!";
    const throwyFunction = () => calculateCart();

    const expectedResult1 = "Please give me an array!";
    const throwyFunction1 = () => calculateCart({});

    expect(throwyFunction).to.throw(expectedResult);
    expect(throwyFunction1).to.throw(expectedResult1);
  });
  it("should skip an item if the cart has an invalid item", () => {
    const cartWithInvalidItem = [
      {
        name: "Potato 🥔",
        price: 9.99,
        weight: 1,
        isExpired: false,
      },
      {
        name: "",
        weight: 0,
        isExpired: false,
      },
      "Peanut Butter",
    ];
    const expectedResult = 1;
    const result = calculateCart(cartWithInvalidItem);

    expect(result.amountOfItems).to.equal(expectedResult);
    expect(result.cart.length).to.equal(expectedResult);
  });
  it("should stop calculating if the weight limit is exceeded.", () => {
    const megaBigCartOfDestiny = [
      {
        name: "Chicken 🐔",
        price: 9.99,
        weight: 8000,
        isExpired: false,
      },
      {
        name: "Potato 🥔",
        price: 9.99,
        weight: 1,
        isExpired: false,
      },
      {
        name: "Chicken 🐔",
        price: 9.99,
        weight: 8000,
        isExpired: false,
      },
    ];
    const expectedResult = 2;
    const result = calculateCart(megaBigCartOfDestiny);

    expect(result.amountOfItems).to.equal(expectedResult);
  });
});

describe("calculateCart when the data is OK", () => {
  it("should return cartInfo if we receive a proper cart array", () => {
    const validCart = [
      {
        name: "Chicken 🐔",
        price: 9.99,
        weight: 8000,
        isExpired: false,
      },
      {
        name: "Potato 🥔",
        price: 9.99,
        weight: 1,
        isExpired: false,
      },
    ];

    const expectedResult = {
      subtotal: 19.98,
      total: 22.97,
      tax: 2.99,
      amountOfItems: 2,
      cart: validCart,
    };
    const result = calculateCart(validCart);

    expect(result).to.deep.equal(expectedResult);
  });
});
