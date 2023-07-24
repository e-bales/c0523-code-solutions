# unit-tests-jest-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are unit tests?
  Unit tests are ways of testing small pieces of code, usually one or twp functions, to make sure any changes made to the code are still producing the results we expect.
- Why is it important to write unit tests?
  If we need to refactor code, we also need to make sure when we refactor, we are still producing the desired results, while also not introducing new bugs. Unit tests help us efficiently catch problems that may arise when we refactor, and can save headache later down the line.
- What code should be tested with a unit test? What code is not well suited for unit tests?
  Small, granular code is good for unit testing. You should not do unit tests on code that works with file systems, the database, or a 3rd party source, as this can drastically slow down unit testing, when the point of unit testing is its efficiency.
- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is the most popular JavaScript unit testing framework, which allows you to write tests that check the code you are writing is producing the desired results. Mocha, and QUnit are others.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
