const client = { name: "bob" };
const anotherClient = client;

const listOfClients = [];

listOfClients.push(client);

const result = listOfClients[0] === client;
const result1 = client === anotherClient;

console.log(result1);

const evaluationResult = 5 === 5;
// if(evaluationResult)
