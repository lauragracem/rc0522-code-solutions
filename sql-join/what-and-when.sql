select "f"."releaseYear" as "releaseYear",
       "g"."name" as "genre",
       "G"."filmId" as "filmId"
from   "films" as "f"
join   "filmGenre" as "G" using ("filmId")
join   "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie'
