// Objects!

// We use them to list properties of a specific element

const someMetal = {
  name: "Scrap Metal",
  type: "Stainless",
  fusionPoint: 1500,
};

const somePotato = {
  name: "Potator",
  type: "Yukon Gold",
  goodFor: ["Fries", "Hashbrowns"],
};

// We can access the values of an object by using the key in two ways

// Dot notation (literal)

somePotato.name;

// Square bracket Notation

somePotato["name"];
// or
const key = "name";
somePotato[key];

// We can add keys by using the same notation as accessing, but we assign a value

somePotato.size = "big";

somePotato["size"] = "big";

// We can modify key values by using the same notation as accessing, but we assign a value

somePotato.size = "small";

somePotato["size"] = "small";

// How to iterate over objects

// Extract values or the keys using Object.values(), Object.keys(), then use a for..of loop
// Use a for..in loop to get access to the keys

const potatoObjectValues = Object.values(somePotato);
const potatoObjectKeys = Object.keys(somePotato);

for (const value of potatoObjectValues) {
  // ...
}

for (const key of potatoObjectKeys) {
  // ...
}

for (const key in somePotato) {
  // ...
}
