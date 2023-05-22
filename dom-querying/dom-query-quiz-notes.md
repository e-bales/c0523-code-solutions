# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To help with debugging/inspection and to let us know if what we have selected is what we are actually wanting to select.
- What is a "model"?
  The structure of all the objects that the DOM represents.
- Which "document" is being referred to in the phrase Document Object Model?
  The web page 'document', which is all the contents of the web page
- What is the word "object" referring to in the phrase Document Object Model?
  All tags and text in an HTML document are objects, and so 'object' refers to the collection of all objects to form the 'document' object
- What is a DOM Tree?
  The tree-like structure that HTML is represented as in the DOM.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  .getElementById and .querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  .getElementsByClass
- Why might you want to assign the return value of a DOM query to a variable?
  You can call other methods on the return value for further information, such as .closest.
- What `console` method allows you to inspect the properties of a DOM element object?
  .dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all the elements before Javascript may interact with them.
- What does `document.querySelector()` take as its argument and what does it return?
  It takes a css selector, and it returns the first element that matches that selector, or null if none are found.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes one or more css selectors, and returns a NodeList of all elements that match these selectors.

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
