select "g"."name" as "Genre",
       count(*) as "Total Appearances"
  from "castMembers"
  join "films" using ("filmId")
  join "filmGenre" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "castMembers"."actorId" = 178
  group by "g"."name";
-- not sure how to select Lisa Monroe without hard-coding her actorId, which is 178.
