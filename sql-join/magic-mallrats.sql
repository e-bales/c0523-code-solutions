select "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name"
  from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "customers" as "c" using ("customerId")
where "f"."title" = 'Magic Mallrats';
