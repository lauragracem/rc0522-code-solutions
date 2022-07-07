select "a"."line1" as "line1",
       "c"."name" as "city name",
       "a"."district" as "district",
       "C"."name" as "country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "C" using ("countryId");
