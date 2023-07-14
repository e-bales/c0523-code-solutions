select "place"."name" as "Country",
       count(*) as "Total Cities"
  from "countries" as "place"
  join "cities" as "c" using ("countryId")
  group by "place"."countryId";
