# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The element from which the event initially fired.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of bubbling! Meaning the vent travels up the ancestors until it reaches even the window at times.
- What DOM element property tells you what type of element it is?
  event.target.tagName
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a CSS selector as an argument, and returns the closest ancestor node element that matches the selector.
- How can you remove an element from the DOM?
  element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Have your clickable DOM elements in some container element, and then add the event listener to that container to catch the events as they bubble.

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
