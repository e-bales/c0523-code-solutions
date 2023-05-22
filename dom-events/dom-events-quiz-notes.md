# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging purposes!
- What is the purpose of events and event handling?
  To be able to know when the user clicked a button, or hovered over a word, or resized the page. To allow the developer to have more interaction with what the user does.
- Are all possible parameters required to use a JavaScript method or function?
  No! Some are optional, but some are required.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener
- What is a callback function?
  A function that you pass into another function. This can have multiple uses, but allows that passed in function to be called in helpful ways.
- What object is passed into an event listener callback when the event fires?
  An Event object.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The object from which the event was dispatched! You could log the event.target to get more info, or you could check MDN!
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The first one is correct and is passing the handleClick function into the event listener as a callback. The second one is calling the handleClick function right there, not passing the function as a callback, and the code will not work as intended (I made this mistake).

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
