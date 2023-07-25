# TV Shows

- For all mankind, Apple+, 3 seasons, sci-fi, alternate history
- The Witcher, Fantasy, Netflix, 3, English
- Seinfeld, 9 seasons, comedy, Netflix
- Superstore, 6 seasons, Netflix, Comedy
- Invicible, Prime, Cartoon, one season
- The Bear, Disney+, 2 seasons, Drama
- Power, 6 seasons, Drama, Prime
- Foundation, Apple +, Scifi, 2 seasons

ORM => Organisational (?) Relationship Mapper

Tables: Shows, Genres, Streaming Services

Genres.find("scifi").shows.all

SELECT \*
FROM shows
JOIN genres ON genres.id = shows.genre_id
WHERE genre.name
LIKE "scifi";

camelCase

# Money!

2 billions dollars
!dollars => cents

9.99 \* 1.1495 = 11.48

round(9.99 _ 1.14975 _ 100) / 100

round(999 \* 14.975) / 100

humanized_money_with_symbol(999) => 9.99$
