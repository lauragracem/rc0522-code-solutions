select "a"."firstName",
       "a"."lastName",
       "c"."actorId",
       COUNT(DISTINCT("f"."filmId")) as "count",
       "g"."genreId",
       "G"."name" as "genre"
from "actors" as "a"
join "castMembers" as "c" using ("actorId")
join "films" as "f" using ("filmId")
join "filmGenre" as "g" using ("filmId")
join "genres" as "G" using ("genreId")
Where "firstName" = 'Lisa'
group by "a"."firstName",
         "a"."lastName",
         "c"."actorId",
         "g"."genreId",
         "G"."name";

-- select "a"."firstName",
--        "a"."lastName",
--        "c"."actorId",
--        "f"."filmId",
--        COUNT(DISTINCT("f"."filmId")) as "count",
--        "g"."genreId",
--        "G"."name" as "genre"
-- from "films" as "f"
-- join "castMembers" as "c" using ("filmId")
-- join "filmGenre" as "g" using ("filmId")
-- join "genres" as "G" using ("genreId")
-- join "actors" as "a" using ("actorId")
-- Where "firstName" = 'Lisa'
-- group by "a"."firstName",
--          "a"."lastName",
--          "c"."actorId",
--          "f"."filmId",
--          "g"."genreId",
--          "G"."name";
