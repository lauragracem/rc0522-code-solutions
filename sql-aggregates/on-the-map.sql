select "C"."name" as "country",
  count(*) as "totalCities"
  from "countries" as "C"
  join "cities" as "c" using ("countryId")
  group by "C"."countryId";
