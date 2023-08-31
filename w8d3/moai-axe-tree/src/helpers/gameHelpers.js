export const pickOppositeChoice = (playerChoice) => {
  const choices = ["🗿", "🌳", "🪓"];

  if (!playerChoice) {
    throw new Error("HEY CHOOSE SOMETHING YOU DUM DUM.");
  }

  const playerChoiceIndex = choices.indexOf(playerChoice);

  if (playerChoiceIndex === -1) {
    throw new Error("THAT AINT A GOOD INPUT");
  }

  const winningIndex = (playerChoiceIndex + 1) % 3;

  return choices[winningIndex];
};

export const pickRandomChoice = (seed) => {
  const choices = ["🗿", "🌳", "🪓"];

  if (!seed && seed !== 0) {
    throw new Error("DON'T FORGET THE SEED!");
  }

  if (typeof seed !== "number") {
    throw new Error("WHAT KIND OF SEED IS THIS");
  }

  const randomishIndex = Math.floor(seed * 138013831) % 3;

  return choices[randomishIndex];
};
export const compareResults = (playerChoice, computerChoice) => {
  // "computerWin","playerWin","tie"

  if (playerChoice === computerChoice) {
    return "tie";
  }

  const winningMove = pickOppositeChoice(playerChoice);

  if (winningMove === computerChoice) {
    return "computerWin";
  }
  if (winningMove !== computerChoice) {
    return "playerWin";
  }
};
