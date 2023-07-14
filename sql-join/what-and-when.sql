select "f"."releaseYear" as "Year Released",
       "g"."name" as "Genre"
  from "films" as "f"
  join "filmGenre" using("filmId")
  join "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie';
