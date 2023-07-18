# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  To allow components to access information from lutiple layers up without having to pass it down through each layer with props.
- What values can be stored in context?
  Any values, even objects!
- How do you create context and make it available to the components?
  You use the createContext hook in a seperate file, and then export the variable that you assigned the createContext hook to.
- How do you access the context values?
  You import the variable that you exported from the seperate file, and use the useContext hook with the variable name as the argument. You then wrap the component you want to access the context with a provider.
- When would you use context? (in addition to the best answer: "rarely")
  When you want a piece of information to be accessed across your app or tree of components, but don't want to have to pass the info as a prop through each layer, especially when some layers don't need that information.

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
