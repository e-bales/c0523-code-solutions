# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  static!
- How does setting `position: relative` on an element affect document flow?
  The element still exists in the document's flow, other elements still believe nothing has changed.
- How does setting `position: relative` on an element affect where it appears on the page?
  At first, it does nothing. But if you give further properties such as 'top: 10px' or 'bottom: 50px', then the element moves relative to where it originally is on the page.
- How does setting `position: absolute` on an element affect document flow?
  It takes the element completely out of the document flow, like it isn't even there.
- How does setting `position: absolute` on an element affect where it appears on the page?
  Absolute positioning takes the element out of the rest of the page, and makes it like a new layer. Then, based on the constraints of the containing element, you can move the element with top, bottom, left, or right to specify where the element should be from the edges of the containing element.
- How do you constrain an absolutely positioned element to a containing block?
  If you set the positioning of one of the elements ancestors to relative, then the absolute positioned element will be contained in its ancestor.
- What are the four box offset properties?
  top, bottom, left, and right!

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
