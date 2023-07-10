# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  They are functions that have access to both the request object and the response object, as well as the next function in the lifecycle.
- What is Express middleware useful for?
  They let you execute code, make changes to the request and response object, end the cycle, and call the next middleware function. It basically lets you have more control over your requests.
- How do you mount a middleware with an Express application?
  With the .use method
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The request object and response object.

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
