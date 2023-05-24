# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No! it simply creates a new element for you to play around with and modify.
- How do you add an element as a child to another element?
  element.appendChild(childElement);
- What do you pass as the arguments to the `element.setAttribute()` method?
  A string (or variable that contains a string), denoting the attribute you wish to set, and another string (or '' ''), denoting the value you wish to set for the attribute.
- What steps do you need to take in order to insert a new element into the page?
  You need to first create the element with .createElement, then you optionally can add attributes or text to said element, then find where in your page you wish to insert the element, and then use the insertion function, .appendChild, to insert.
- What is the `textContent` property of an element object for?
  It is a getter/setter, as it can retrieve the text content of an element, or set the tet content of an element.
- Name two ways to set the `class` attribute of a DOM element.
  element.setAttribute('class', 'value-here'), or element.className = 'value-here'
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

1. If you want to use the functionality of your code block in multiple places in your file, you dont have to copy and paste the whole code block, you just need to call the function.
2. Writing functions helps section your code, reducing confusion and clutter when compared to giant blobs of un-functioned code.

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
