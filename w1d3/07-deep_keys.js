const someBigObject = {
  name: "MEGA OBJECT OF DESTINY",
  showThePlayers: function () {
    const player1 = this.players.player1;
  },
  players: {
    player1: {
      name: "Ready",
    },
    player2: {
      name: "Tiglidou",
      matches: {
        m01: {
          won: true,
        },
      },
    },
  },
};

const resultOfFirstMatch = someBigObject.players.player2.matches.m01.won;

console.log(resultOfFirstMatch);

const player2Info = someBigObject.players.player2;
const player2Matches = player2Info.matches;

console.log(player2Matches.m01.won);
