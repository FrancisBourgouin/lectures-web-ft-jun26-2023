const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Client } = require("pg")
const dbClient = new Client({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'jokes_2023',
})
const generateJokeHelpers = require("./helpers/jokeHelpers");
const generateAuthorHelpers = require('./helpers/authorHelpers');

const jokeHelpers = generateJokeHelpers(dbClient)
const authorHelpers = generateAuthorHelpers(dbClient)

dbClient
  .connect()
  .then(() => console.log("DB Connected"))

const app = express();

app.use(logger('dev'));
app.set('view engine', "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/jokes", (req, res) => {
  jokeHelpers.fetchAll()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
})

app.get("/api/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id

  jokeHelpers.fetchById(jokeId)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))

})

app.get("/api/authors", (req, res) => {
  authorHelpers.fetchAll()
    .then(authors => res.json(authors))
    .catch(err => res.json(err))

})

app.get("/api/authors/:author_id", (req, res) => {
  const authorId = req.params.author_id

  authorHelpers.fetchById(authorId)
    .then(author => res.json(author))
    .catch(err => res.json(err))
})

app.get("/jokes/new", (req, res) => {

  authorHelpers
    .fetchAll()
    .then(authors => {
      const templateVars = { authors }
      res.render("new_joke", templateVars)
    })
    .catch(err => res.json(err))

})


app.post("/api/jokes", (req, res) => {
  const { question, answer, rating, author_id } = req.body

  jokeHelpers.insertJoke(question, answer, rating, author_id)
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
})

module.exports = app;
