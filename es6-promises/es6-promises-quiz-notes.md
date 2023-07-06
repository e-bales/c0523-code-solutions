# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the three states a Promise can be in?
  pending: the initial state
  fulfilled: oepration completed succesfully
  rejected: operation failed
- How do you handle the fulfillment of a Promise?
  The return value of a fulfillment is passed along to the next .then()
- How do you handle the rejection of a Promise?
  The return value of a rejection is passed along to the next rejection handler, either a .catch at the end of the chain or the second callback function passed into a .then

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
