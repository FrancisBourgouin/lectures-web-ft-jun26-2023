const { Client } = require("pg")
const client = new Client({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'jokes_2023',
})



// const bob = [
//   {
//     id: 1,
//     question: 'Knock knock, whos there, to who',
//     answer: 'no, to whom',
//     rating: 3,
//     author_id: 1
//   },
//   {
//     id: 2,
//     question: 'How is a bouncer at a club like a dish soap?',
//     answer: 'They both DETER GENTS',
//     rating: 5,
//     author_id: 2
//   }
// ]

const createPrettyJoke = (jokeObj) => {
  console.log("🌟⭐💫✨✨✨✨💫⭐🌟")
  console.log(`Joke #${jokeObj.id}`)
  console.log(`- ${jokeObj.question}`)
  console.log(`- ${jokeObj.answer}`)
  console.log("🌟⭐💫✨✨✨✨💫⭐🌟 \n\n")
}

const showAllTheJokes = (jokeList) => {
  for (const joke of jokeList) {
    createPrettyJoke(joke)
  }
}

// showAllTheJokes(bob)



const jokeId = process.argv[2]
// client
//   .connect()
//   .then(() => client.query(`SELECT jokes.*, authors.name, authors.description FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = ${jokeId}`))
//   .then(res => res.rows[0])
//   .then(createPrettyJoke)
//   .catch(err => console.log(err))
//   .finally(() => client.end())


const fetchAJoke = () => {
  return client.query(`SELECT jokes.*, authors.name, authors.description FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1`, [jokeId])
    .then(res => res.rows[0])
    .then(createPrettyJoke)
}

const fetchAllTheJokes = () => {
  return client.query("SELECT * FROM jokes")
    .then(res => res.rows)
    .then(showAllTheJokes)
}



client
  .connect()
  .then(() => {
    if (jokeId) {
      return fetchAJoke()
    }
    return fetchAllTheJokes()
  })
  .catch(err => console.log(err))
  .finally(() => client.end())



// if (jokeId) {
//   client
//     .connect()
//     .then(fetchAJoke)
//     .catch(err => console.log(err))
//     .finally(() => client.end())
// } else {
//   client
//     .connect()
//     .then(fetchAllTheJokes)
//     .catch(err => console.log(err))
//     .finally(() => client.end())
// }