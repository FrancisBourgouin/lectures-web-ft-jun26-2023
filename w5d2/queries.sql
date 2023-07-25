SELECT
  jokes.*, authors.name
FROM 
  jokes
JOIN
  authors
ON
  authors.id = jokes.author_id;
WHERE
  name ILIKE "bob"