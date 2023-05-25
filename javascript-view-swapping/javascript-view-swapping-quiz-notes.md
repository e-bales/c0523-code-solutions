# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The element that triggered the firing of the event.
- What is the affect of setting an element to `display: none`?
  It will not appear on your page.
- What does the `element.matches()` method take as an argument and what does it return?
  It takes a CSS selector and it returns a boolean that is true if your element matches the selector, or false if not.
- How can you retrieve the value of an element's attribute?
  the getAttribute() function
- At what steps of the solution would it be helpful to log things to the console?
  All of them! Even if you don't have a bug yet, it can be nice to see exactly what you are working with, and to see if functions are acting the exact way you want them to.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  I couldn't write my event Listener on the .tab-container, bc if I'm not using bubbling, then I don't care about the container, I care about each individual tab. I would have to add an event lsitener to each tab, which is monotonous.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  I would need an if...else-if...else-if block, where the first if statement checks the if the event.target matches the first tab, the second if statement checks if the next tab matches the event.target, and the last if statement checks for the last tab. And then write a lot of code in each one, that hides or shows the correct view according to what tab was selected.

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
