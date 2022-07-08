select "g"."name" as "genre",
       "a"."name" as "actor",
       "f"."filmId" as "filmId"
from "genres" as "g"
join "filmGenre" using ("genreId")

     "castMembers" using ("actorId")
     "actor" as "a" using ("actorId")
where "a"."name" = 'Lisa Monroe";
