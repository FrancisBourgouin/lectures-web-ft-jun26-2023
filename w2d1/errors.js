const bob = "bob";

try {
  bob = "BOB";
} catch (error) {
  console.log("OH NO", error.message);
}

console.log(bob);

// Throw

// Uncaught exceptions
