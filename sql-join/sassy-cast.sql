select "a"."firstName" as "firstName",
       "a"."lastName" as "lastName",
       "c"."actorId" as "actorId",
       "f"."title" as "film title"
from   "actors" as "a"
join   "castMembers" as "c" using ("actorId")
join   "films" as "f" using ("filmId")
where  "title" = 'Jersey Sassy';
