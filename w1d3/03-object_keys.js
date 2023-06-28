const coffeeMug = {
  material: "Porcelain",
  contents: {
    main: "Coffee",
    secondary: "Milk",
  },
  capacity: 400,
  baseColor: "Grey",
  topColor: "White-ish",
};

// Dot Notation => Shortcut => Drax
const result1 = coffeeMug.material;

// Square Bracket Notation => Long way => Evaluate the contents of the square brackets
const result2 = coffeeMug["m" + "a" + "t" + "e" + "r" + "i" + "a" + "l"];

const keyToCheck = "contents";
const result3 = coffeeMug[keyToCheck].main;
const result4 = coffeeMug.keyToCheck;
// result4.main;
console.log(result1, result2, result3, result4);

// const someFunction = function () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// };

// someFunction();

const someObject = { name: "Pequeno Pollo de la Pampa", email: "pock@pock.com" };

someObject.age = 9001;
someObject["age"] = 42;

console.log(someObject);
