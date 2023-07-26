const generateJokeHelpers = (dbClient) => {
  // We receive dbClient as a parameter
  // It's available in the scope of that function

  const fetchById = (jokeId) => {
    const queryString = `
    SELECT jokes.*, authors.name, authors.description 
    FROM jokes 
    JOIN authors ON authors.id = jokes.author_id 
    WHERE jokes.id = $1`
    const queryArgs = [jokeId]

    return dbClient.query(queryString, queryArgs)
      .then(res => res.rows[0])
  }

  const fetchAll = () => {
    const queryString = `
    SELECT * FROM jokes
    `

    return dbClient.query(queryString)
      .then(res => res.rows)
  }

  const insertJoke = (question, answer, rating, author_id) => {
    const queryString = `
      INSERT INTO
        jokes (question, answer, rating, author_id)
      VALUES
        ($1, $2, $3, $4)
      RETURNING *`
    const queryArgs = [question, answer, rating, author_id]
    return dbClient
      .query(queryString, queryArgs)
      .then(res => res.rows[0])
  }

  const fetchRandom = () => {
    return Promise.resolve(
      {
        id: 2,
        question: 'How is a bouncer at a club like a dish soap?',
        answer: 'They both DETER GENTS',
        rating: 5,
        author_id: 2
      }
    )
  }

  return { fetchById, fetchAll, insertJoke }
}




module.exports = generateJokeHelpers