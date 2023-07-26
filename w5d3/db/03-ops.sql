-- JOKE FETCHER
-- Fetch a singular joke
-- BAD SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = 5;

SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = 5;



SELECT jokes.*, authors.name, authors.description FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = 5;


INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1)




-- Fetch all the jokes
SELECT * FROM jokes;
