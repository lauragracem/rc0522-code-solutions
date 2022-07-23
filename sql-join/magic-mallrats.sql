select "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
       "r"."customerId" as "customerId",
       "i"."inventoryId" as "inventoryId",
       "f"."filmId" as "filmId",
       "f"."title" as "film title"
from   "customers" as "c"
join   "rentals" as "r" using ("customerId")
join   "inventory" as "i" using ("inventoryId")
join   "films" as "f" using ("filmId")
where  "title" = 'Magic Mallrats';
