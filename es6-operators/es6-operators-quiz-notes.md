# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are boolean operators that return true when both operands are true (&&) or if at least one operand is true (||). Otherwse, they return false. They can be used in variable assignment, as, for example, you could use logical or to assign default values if the first operand is falsy.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation is when we don't fully evaluate operands after discovering one to be falsy (in the case of &&) or truthy (in the case of ||), as we already know the outcome of the expression.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing operator is similar to the logical OR operator for variable assignment, but instead of checking for 'falsy', it checks for null/undefined.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator is basically an if/else statement for variable assignment. If the provided variable/expression is true, assign x, else assign y.
- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining operator is used for if you do not know if an object has a certain property or method, but don't want to throw an error by accessing said property/method.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread syntax is used with iterables, and allows you to expand said iterable into another iterable. You use it if you want to copy an array/string/object into another variable and expand upon it.
- What data types can be spread into an array? Into an object?
  You can spread other arrays, strings, and 'iterable' objects into arrays. You can spread other objects, arrays, and strings into objects.
- How does spread syntax differ from rest syntax?
  Rest syntax is often used in function arguments, and while they look similar, spread syntax is almsot opposite rest syntax. Rest syntax combines all extra arguments into one argument that you can then iterate through, whereas spread syntax literally spreads an iterable out into another iterable.

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
