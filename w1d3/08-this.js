// THIS is fun :D

// This, refers to the context (the immediate only) (Where the function is defined)
const someDog = {
  name: "Milou",
  type: "Yorkshire Terrier",
  color: "white",
  sayHi: function () {
    console.log("Waf waf.");
    console.log(`*In dog speak* Hi my name is ${this.name}`);
  },
  sayHiArrow: () => {
    console.log("Waf waf.");
    console.log(`*In dog speak* Hi my name is ${this.name}`);
  },
};

const thatFish = {
  name: "FISHINATOR 2000",
  type: "Beta",
  sayHi: function () {
    console.log("Bloop bloop.");
    console.log(`*In fish speak* Hi my name is ${this.name}`);
  },
};

someDog.sayHi();

const randomObject = {
  name: "Wiggle wiggle",
  resultOfSayHi: someDog.sayHiArrow(),
};
someDog.sayHiArrow();
thatFish.sayHi();

const someFunction = function () {
  // ... "This" is defined on definition
};
const someArrowFunction = () => {
  // ..."This" is defined on execution
};

const babyFunction = (a, b) => a + b;
