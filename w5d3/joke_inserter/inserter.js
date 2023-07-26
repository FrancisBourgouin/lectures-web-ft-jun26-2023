const { Client } = require("pg")
const client = new Client({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'jokes_2023',
})

const [, , question, answer, rating, author_id] = process.argv

const queryString = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING id`
const queryArgs = [question, answer, rating, author_id]

client
  .connect()
  .then(() => client.query(queryString, queryArgs))
  .then(res => res.rows[0].id)
  .then(id => console.log(`Inserted new joke succesfully, at id ${id}`))
  .catch(err => console.log(err))
  .finally(() => client.end())