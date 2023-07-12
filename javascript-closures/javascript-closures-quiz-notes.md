# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  JavaScript variables are lexically scoped, so scope is determined in the source code.
- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript has a 'local execution context' that contains all the local variables, allowing functions to 'remember' variables inside it.
- What values does a closure contain?
  You assign variables in the closure an initial value, and then those variables may be updated due to the returned function that makes use of them.
- When is a closure created?
  A closure is created when the function it is inside of gets called.
- How can you tell if a function will be created with a closure?
  If that function has variable(s) declared inside it, and the function returns another function that uses that function.
- In React, what is one important case where you need to know if a closure was created?
  If you create closures inside useEffect, it is important to know because it may cause bugs and it will help you know when the Effect should actually be ran.

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
