# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  Controlled componenets make use of state to allow you to update the UI while the user is typing inside an input. This will force the input to always have the value you have, rather than just when you submit. Additionally, you can jsut grab the value of the state variables rather than the form. You must pass a 'value' props for text inputs as well as an 'onChange' callback function.
- What are some advantages of using uncontrolled components?
  It's less writing and you don't re-render the component on each new keystroke or decision.
- What are some advantages of using controlled components?
  It is more user responsive as you can manipulate the data that the user is typing in in real time, and you don;t need to play with the formSubmission to get theuser data, as it's stored in the state variables.
- Which style do you prefer?
  If I have no need to show off the data that the user is typing in, then I will go with uncontrolled for better performance. If, for some reason, I am using the data as they are typing before they submit the form, then I will use controlled.
- What two props must you pass to an input for it to be "controlled"?
  A 'value' and an 'onChange'
- What are some popular npm packages for creating forms in React?
  React Hook Form, Formik, and React Final Form.

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
