// Javascript Classes

// Array.isArray();
// Object.values();
// new Date();
// new Promise();

// Class => Blueprint to build an element

class Chicken {
  constructor(size, language, name) {
    this.size = size;
    this.language = language;
    this.name = "Master Chicken " + name + "the third";
  }

  greet = function () {
    console.log(`Hello I'm a chicken! My name is ${this.name}`);
  };

  poke = function () {
    console.log("** RUNS AWAY **");
    if (this.language === "french") {
      console.log("POCK POCK DUDE QU'EST-CE TU FAIS");
    } else {
      console.log("BACH BACH (fancy chicken)");
    }
  };
}

class ZeldaChicken extends Chicken {
  constructor(name) {
    super("small", "hyrulean", name);
  }

  poke = function () {
    console.log("HEY");
    console.log("HEY");

    console.log("** INFINITE CHICKEN RAGE **");
    console.log("** AN ARMY OF CHICKENS IS POKING YOU **");
  };
}

const bob = new Chicken("small", "french", "Colonel Sanders");
const paul = new Chicken("big", "english", "Paul");

const zelda = new ZeldaChicken("Zelda");

// bob.greet();

// bob.poke();
// paul.poke();

console.log(zelda);

zelda.poke();
