# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  In its own file, similar to a functionm but the name was start with a capital letter.
- How do you use JSX in a React component?
  JSX lets you write the HTML structure inside your React component, which is a javascript file. JSX is very similar to HTML, jsut with a few differences.
- How do you declare the props a React component needs?
  Inside curly braces inside the component definition.
- How do you pass props to a React component?
  Through attributes, like in HTML.
- How do you include JavaScript expressions in JSX?
  Inside curly braces.
- What are React hooks and what are the three "Rules of Hooks"?
  React hooks are special functions that start with 'use', and are only available when React is rendering. They must start with 'use', only becalled at the top level, and cannot be called inside loops or conditionals.
- How do you manage state in a React component?
  You have both the state and setState that you get from using the useState hook. This state only updates at the start of each render, and the component is told to rerender when you use the setState function.
- How do you handle events in React?
  Usually, by defining functions in your App to handle the events, and then passing those event handlers in props to the component that are supposed to handle.
- How do you let a parent component know that an event happened?
  Usually, the event handler is declared within the parent component, and this component is passed to a child component tho=rough props. Therefore, the parent handles the event too.

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
