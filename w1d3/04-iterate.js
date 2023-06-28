const someChicken = {
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  key: "MWAHAHAHAHAHAHA",
};

someChicken.age = 9001;
someChicken["age"] = 42;

const chickenValues = Object.values(someChicken);
const chickenKeys = Object.keys(someChicken);

// console.log(chickenKeys, chickenValues);

// For..of, works with arrays
for (const value of chickenValues) {
  console.log(value);
}

for (const key of chickenKeys) {
  const value = someChicken[key];
  console.log(key, value);
}

for (const key in someChicken) {
  const value = someChicken[key];
  console.log(key, value);
}

const someWeirdObject = { 0: "a", 1: "b", 2: "c" };
const someArray = ["a", "b", "c"];

someArray[0];
someWeirdObject[0];

for (const keyQuestionMark in someArray) {
  console.log(keyQuestionMark);
}
