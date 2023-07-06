# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  They are used for writing asynchronous, promise-based functions that are more readable and intuitive than the other options.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async/await allows you to write code in a more "regular" manner, where the code block looks like any other javascript code block, but you know the code is stopping until the promise from the await keyword returns. with .then/.catch, you have to chain things together, which looks less inutitive once you reach more and more .then()s. Additionally, .then and .catch make explicit use of callbacks, whereas you don't need them with await.
- When do you use `async`?
  You write async before the function definition when you want to write an asynchronous function, or a function that you know will have to wait at some point for data to return/data to generate before the rest of the code can continue.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await inside an async function when you want the code to 'pause' at this point and wait for a return value of the promise.
- How do you handle errors with `await`?
  With the try and catch blocks.
- What do `try`, `catch` and `throw` do? When do you use them?
  `try` is the basic function block where you would put your await promise. If that returns an error, your `catch` block will catch the error and its code block will execute. `throw` lets you manually throw an error, allowing for oyu to specifically go into the `catch` block even if a promise didn't return an error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await, then the Promise will act on the same tick, and the promise rejection won't get caught.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Promise.then and async/await both seem fairly intuitive to me, and in small functions I would prefer promise.then as I find reading it easy to follow. But I can see how .then() chains can become unwieldy quite quickly, and how in larger codeblocks, async/await makes this more readable and manageable.

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
