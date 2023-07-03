const validateItem = (item) => {
  if (typeof item !== "object") {
    return false;
  }

  const validKeys = ["name", "price", "weight", "isExpired"];
  const keysToCheck = Object.keys(item);

  if (validKeys.length !== keysToCheck.length) {
    return false;
  }

  for (const key of validKeys) {
    if (!keysToCheck.includes(key)) {
      return false;
    }
  }

  return true;
};

const roundPrice = (price) => Math.round(price * 100) / 100;

const TAX = 0.14975;

const calculateCart = (cart) => {
  let isInvalid = !Array.isArray(cart);

  if (isInvalid) {
    throw new Error("Please give me an array!");
  }

  let subtotal = 0;
  let total = 0;
  let tax = 0;
  let amountOfItems = 0;
  let totalWeight = 0;
  let filteredCart = [];

  cart.forEach((item) => {
    if (validateItem(item) && totalWeight + item.weight < 9001) {
      amountOfItems++;
      totalWeight += item.weight;
      subtotal += item.price;
      filteredCart.push(item);
    }
  });

  subtotal = roundPrice(subtotal);
  tax = roundPrice(subtotal * TAX);
  total = subtotal + tax;

  return {
    subtotal,
    total,
    tax,
    amountOfItems, // Works
    cart: filteredCart, // Works
  };
};

const calculateCartOldVersion = (cart) => {
  let isInvalid = !Array.isArray(cart);

  if (isInvalid) {
    throw new Error("Please give me an array!");
  }

  let subtotal = 0;
  let total = 0;
  let tax = 0;
  let amountOfItems = 0;
  let totalWeight = 0;

  for (const item of cart) {
    if (validateItem(item) && totalWeight + item.weight < 9001) {
      amountOfItems++;
      totalWeight += item.weight;
      subtotal += item.price;
    }
  }

  subtotal = roundPrice(subtotal);
  tax = roundPrice(subtotal * TAX);
  total = subtotal + tax;

  return {
    subtotal,
    total,
    tax,
    amountOfItems, // Works
    cart, // Works
  };
};

module.exports = calculateCart;
