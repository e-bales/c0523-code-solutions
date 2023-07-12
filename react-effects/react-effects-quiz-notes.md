# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component is initially rendered and added to the DOM.
- What is a React Effect?
  A React Effect is a bit of code that you use to conenct your React app to some external system. They are similar to events, but allow you to 'step out' of your React app.
- When should you use an Effect and when should you not use an Effect?
  You should use an Effect when you need to synchronize with some external system, 'step out' of your code. If your Effect is only dealing with states, do not use an Effect.
- When do Effects run?
  Effects run after every render by default, but you can specify when you'd like it to run to be more efficient.
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Dependencies are ways to allow you to specify when an Effect should run, for by default they are run every time the component renders. You specify them by passing an array of dependencies as the second argument in the useEffect call.
- Why would you want to clean up from an Effect?
  Often times, the Effect will need some way to 'stop' what it is doing. If you connected in your Effect to some external system, you need a way to disconnect from this system. You use cleanup for that.
- How do you clean up from an Effect?
  You return a function that includes all necessary code to cleanup whatever you did in the Effect.
- When does the cleanup function run?
  It will be called each time befor ethe Effect runs, and one final time when the component unmounts.

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
