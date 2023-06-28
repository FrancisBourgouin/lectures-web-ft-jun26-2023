// Why objects?

const something = ["Porcelain", "Coffee", 400, "Grey", "White-ish"];

const coffeeMug = {
  material: "Porcelain",
  contents: "Coffee",
  capacity: 400,
  baseColor: "Grey",
  topColor: "White-ish",
};

const anotherCoffeeMug = {
  baseColor: "Red",
  contents: "Coffee",
  capacity: 500,
  topColor: "White a little bit",
  material: "Porcelain",
};

const listOfMugs = [coffeeMug, anotherCoffeeMug];

// If you have properties of something, or you're trying to describe, probably an object
// If you create a list of elements, that are independent, then probably an array

const listOfScores = [10, 7, 8, 5, 10, 4];
