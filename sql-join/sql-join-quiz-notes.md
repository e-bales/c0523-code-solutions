# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key is an identifier that references another table, to allow the database to connect data but also keep information in seperate tables.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "table1"
  join "table2" using ("columnName");

  select \*
  from "table1"
  join "table2" on "table1"."columnA" = "table2"."columnB"

  Use the first syntax if the primary key and foreign key have the exact same name. Use the second syntax if they do not.

- How do you temporarily rename columns or tables in a SQL statement?
  By using an alias, with the 'as' keyword.
  i.e.
  select "products"."name" as "product"
  "suppliers".name" as "supplier"
- How do you create a one-to-many relationship between two tables?
  If you join tables and a foreign key of one table points to the primary key of another table, than you create a one-to-many relationship. For example, in our products and suppliers tables, one supplier will have many products.
- How do you create a many-to-many relationship between two tables?
  If you create a third, seperate table with a join statement, and you have foreign keys from the two tables you joined, then you can have a many-to-many relationship. For example, in our suppliers and products analysis, suppose a product has many suppliers, and a supplier will have many products.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
