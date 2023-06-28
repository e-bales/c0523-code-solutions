# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions only available when React is rendering.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  You can only use them at the top of your componenets, you cannot put them later down in your code, such as in a loop or a conditional.
- What is the purpose of state in React?
  It allows us to keep a record of what has happened between renders.
- Why can't we just maintain state in a local variable?
  The entire code for the component gets re-rendered, and so a local variable will just get declared again and again, always reverting to its initialization.
- What two actions happen when you call a `state setter` function?
  The state setter sets the state to whatever is provide, and it also queues a new render.
- When does the local `state variable` get updated with the new value?
  When the component actually re-renders.

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
