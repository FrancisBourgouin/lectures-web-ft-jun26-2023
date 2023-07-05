// Chat Server & Client

// Listener?
// Condition
// Listen to an event
//

// connectionListener => listen to a connection, we will do something when a new connection event happens

// Deno / Bun

// const net = require("net");
const net = require("node:net"); // Namespacing

const listOfClients = [];

const waiterGoodServiceManual = (client) => {
  client.setEncoding("utf-8");

  listOfClients.push(client);
  console.log(`Somebody connected! We have ${listOfClients.length} clients!`);

  client.write("Please take a seat! \n");

  // ON the event of receving data from the client

  const logAndRepeat = (data) => {
    console.log("Client said: " + data);
    client.write(`Oh so you said: ${data} \n`);
  };

  const yellAtEverybody = (data) => {
    console.log("Client said: " + data);
    for (const connectedClient of listOfClients) {
      connectedClient.write(`THEY WANT ${data}`);
    }
  };

  const yellAtEverybodyElse = (data) => {
    console.log("Client said: " + data);
    for (const connectedClient of listOfClients) {
      if (client !== connectedClient) {
        connectedClient.write(`THEY WANT ${data}`);
      }
    }
  };

  // client.on("data", logAndRepeat);
  // client.on("data", yellAtEverybody);
  client.on("data", yellAtEverybodyElse);
};

const waiter = net.createServer(waiterGoodServiceManual);

waiter.on("listening", () => {
  console.log("I'm ready for clients!");
});

waiter.listen(9001);
