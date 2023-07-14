select "a"."line1" as "Street Address",
       "c"."name" as "City",
       "a"."district" as "District",
       "count"."name" as "Country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "count" using ("countryId");
