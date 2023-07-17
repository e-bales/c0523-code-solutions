# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  If you write an async sub-function within useEffect, and call that sub-function, you can fetch data which can then be saved in state variables in order for the component to make use of.
- What browser function can be used to make HTTP requests to a server in React?
  fetch (?)
- How do you use `useEffect` to load component data just once when the component mounts?
  Your dependencies are just an empty array.
- How do you use `useEffect` to load component data every time the data key changes?
  Your dependencies include the data key that will change.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  You should use a third-party data managemanet library, such as: React Query, Vercel SWR

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
