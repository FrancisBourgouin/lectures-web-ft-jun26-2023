// What is a method?

// .sort() , .includes(), .indexOf()
// Builtin functions
// Functions for an object

// Method, is a function that is in the context of an object

// const sayHi = function () {
//   console.log("Waf waf.");
// };

// const sayHi = function () {
//   console.log("Bloop bloop.");
// };

const someDog = {
  name: "Milou",
  type: "Yorkshire Terrier",
  color: "white",
  sayHi: function () {
    console.log("Waf waf.");
  },
};

const someFish = {
  name: "Fishinator",
  type: "Beta",
  sayHi: function () {
    console.log("Bloop bloop.");
  },
};

someDog.sayHi();

someFish.sayHi();

// [1,2,3,4,5].sort()
// [4,5,6,7,8].sort()
