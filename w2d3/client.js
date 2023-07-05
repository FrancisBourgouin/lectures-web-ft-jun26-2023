const net = require("node:net");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ host: "localhost", port: 9001 }, () => {
  console.log("Ready to order some food!");
});

client.setEncoding("utf-8");

rl.on("line", (data) => {
  client.write(data);
});

rl.on("SIGINT", () => {
  console.log("Thank you for coming!");
  rl.close();
  client.end();
});
// setInterval(() => {
//   client.write("I WANT POTATOES 🥔🥔🥔🥔 élément");
// }, 1000);

client.on("data", (data) => console.log(data));
