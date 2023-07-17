# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  It returns a promise that resolves with a Response object
- What is the default request method used by `fetch()`?
  get
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  You can pass an 'init' object as the second parameter, in which you can include a method property with the value of your request method.
- How does `fetch` report errors?
  It will reject with a TypeError, and you should check the Response.ok property to see if you get a 404 or 500, as a 404 or 500 will not be thrown by fetch.

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
