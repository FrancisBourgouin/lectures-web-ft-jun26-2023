// Callbacks

// Drills => Construction

// Manual Drills
// Electric Drills
// Impact Drills
// Pneumatic Drills

const someFct = function () {
  // ...
};
function someFct2() {
  // ..
}

const listOfNames = ["Shajee", "Conor", "Shani", "Maya"];
const anotherListOfNames = ["Khalid", "Ramesh", "Jackie"];

// "Normal" functions that works by themselves (Bits / Drill bits)
const sayHi = (name) => console.log(`Hi ${name} !`);

const sayFancyHi = (name) => console.log(`🌞🌞🌞 Hi ${name} ! 🌞🌞🌞`);

const sayBye = (name) => console.log(`Bye ${name} !`);

const sayByeALot = (name, amountOfTimes) => {
  for (let i = 0; i < amountOfTimes; i++) {
    console.log(`Bye ${name} !`);
  }
};

const doubleUp = (value) => value * 2;

const assignStudent = (name) => `Student: ${name}`;

const reportName = (name, index, array) =>
  console.log(`Student ${name} is at position ${index} in the array ${array}`);

// Functions that needs another function to work (Drill)

// Expected type for list => Array
// Expected type for action => Function (definition)
// actionForEachName (drill) Higher Order Functions (Function that needs another function to work, or a function that returns a function def)
const actionForEachName = (list, action) => {
  for (const index in list) {
    const name = list[index];
    // Follow the all you can east buffet
    action(name, index, list);
  }
};

const modifyEachNameInList = (list, action) => {
  const output = [];
  for (const name of list) {
    const result = action(name);
    output.push(result);
  }
  return output;
};

// Callbacks => Relationship status

// sayHi is THE callback of actionForEachName
// actionForEachName(listOfNames, sayHi);
listOfNames.forEach(sayHi);
// sayBye is THE callback of actionForEachName
actionForEachName(anotherListOfNames, sayBye);

// const result = modifyEachNameInList(listOfNames, assignStudent);
// const result = listOfNames.map(assignStudent);
// (name) => `Student: ${name}`; => Function with no name
const result = listOfNames.map((name) => `Student: ${name}`);
console.log(result);

actionForEachName(anotherListOfNames, reportName);
// Why do we have drills / drill bits => Modularity / Flexibility / DRY

const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => number * number);
console.log(result2);

const sayByeFiveTimes = (name) => sayByeALot(name, 5);

const functionOrUndefined1 = (name) => sayByeALot(name, 5);
const functionOrUndefined2 = sayByeALot("name", 5);

console.log(functionOrUndefined1, functionOrUndefined2);
// 1 : function
// 2 : undefined

actionForEachName(listOfNames, (name) => sayByeALot(name, 5));
actionForEachName(listOfNames, sayByeFiveTimes);

// Drill bit on top of your drill bit
