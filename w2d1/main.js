const calculateCart = require("./calculateCart");

console.log("Welcome to Costco, I love you.");

console.log("Let me shop...");

const cart = [
  {
    name: "Spaghetti 🍝",
    price: 999.99,
    weight: 10,
    isExpired: false,
  },
  {
    name: "Plasters 🩹",
    price: 1.99,
    weight: 1,
    isExpired: true,
  },
  "Nutella",
  { name: "dodokwdwdkowdokwd" },
];

console.log("Look at that cart!");
console.log(cart);

console.log("I need more info about my current cart");

console.log(calculateCart(cart));
