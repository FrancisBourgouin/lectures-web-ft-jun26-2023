const generateAuthorHelpers = (dbClient) => {
  // We receive dbClient as a parameter
  // It's available in the scope of that function

  const fetchById = (authorId) => {
    const queryString = `
    SELECT * FROM authors WHERE id = $1`
    const queryArgs = [authorId]

    return dbClient.query(queryString, queryArgs)
      .then(res => res.rows[0])
  }

  const fetchAll = () => {
    const queryString = `
    SELECT * FROM authors
    `

    return dbClient.query(queryString)
      .then(res => res.rows)
  }

  return { fetchById, fetchAll }
}




module.exports = generateAuthorHelpers