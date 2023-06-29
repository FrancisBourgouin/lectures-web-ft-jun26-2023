// IIFE

// Why do we want functions?

// Control the scope of our steps
// Reusability
// Export/Import => Readability
// Simplifies

const daysSince = (date) => {
  const todayDate = new Date();
  const oldDate = new Date(date);

  const diffInMs = todayDate.getTime() - oldDate.getTime();
  const diffInDays = diffInMs / 1000 / 86400;

  return Math.floor(diffInDays);
};

const result = daysSince("2023-06-26");
console.log(result);

const sayHi = () => {
  console.log("Hi");
};

sayHi();

console.log("Hi!");

const sayHiToSomeone = (name) => {
  console.log(`Hi ${name}!`);
};

// Expected type of name: String
// Expected type of isHi: Boolean
const saySomethingToSomeone = (name, isHi) => {
  if (isHi) {
    console.log(`Hi ${name}!`);
  } else {
    console.log(`Bye ${name}!`);
  }
};

saySomethingToSomeone("Natasha", true);

// IIFE => Immediatly Invoked Function Expressions

const helpers = () => {
  const sayHi = () => console.log("Hey Hi! WAZZAAAA");

  sayHi();
};

helpers();

(() => {
  const sayHi = () => console.log("Hey Hi! WAZZAAAA");

  sayHi();
})();
