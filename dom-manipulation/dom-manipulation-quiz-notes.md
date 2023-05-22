# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  It gets and sets the value of the elements class.
- How do you update the CSS class attribute of an element using JavaScript?
  element.className = 'new-name';
- What is the `textContent` property of element objects?
  The getter and setter for element and all its descendants
- How do you update the text within an element using JavaScript?
  element.textContent = "New content yay!";
- Is the `event` parameter of an event listener callback always useful?
  No, as we can see in this example. We don't do anything with the event object itself. We just use the fact that we knew a user clicked a button to increase a variable and change element information depeneding on that variable.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  I believe more complicated. If we didn't want to use a variable, we could grab the text content of '.click-count', parse it, change the string number to a real number, increase the real number by one, then put the string and number back together again into .click-count's textContent, but that is incredibly more complicated than using a variable.
- Why is storing information about a program in variables better than only storing it in the DOM?
  As seen in the example above, it's just more complicated to retrieve and change information from the DOM rather than just having JavaScript variables.

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
