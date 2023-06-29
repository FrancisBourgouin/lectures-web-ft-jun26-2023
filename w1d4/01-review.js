// Existential questions!

// Why bad things happen to good people
//

// for (const bob in bobs) {
//   console.log(bob * 2);
// }

// const testBob = bobs[0];
// console.log(testBob * 2);

// Function definition
// Reassignement and Hoisting
// Hoisting (good/bad)
function sayHi() {
  console.log("Hi!");
}

const anotherSayHi = require("./potato");

// sayHi();

// Function expression
const anotherSayHi = function () {
  console.log("Hi!");
};

anotherSayHi = function () {
  console.log("Hi!");
};

//

function sayHi() {
  console.log("MWHAHAHAHAHAH");
}

// Arrow

const someArrowFunction = () => {
  console.log("Hi!");
};

const anotherArrowFunction = () => console.log("Hi!");
