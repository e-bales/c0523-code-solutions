# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    It lets you specify a code block to be executed on each element of the array.
  - What should the callback function do?
    It should use the element provided as the argument in the callback to some capacity, to make use of the fact that forEach iterates over each element.
  - What is `Array.forEach` useful for?
    It is basically a less verbose way to write a for loop, as it allows you to execute code on each element of the array in order.
- `Array.map`:
  - What does `Array.map` do?
    It creates a new array from the altered elements of the array you called map on.
  - What should the callback function return?
    The altered element (or some information that depended on the element)
  - What is `Array.map` useful for?
    It allows us to easily create new arrays of information in a much less verbose way than using a for loop and pushing each element to a new array.
- `Array.filter`:
  - What does `Array.filter` do?
    It creates a shallow copy of a subsection of another array, where the elements in the copy are elements that 'pass' the callback.
  - What should the callback function return?
    A boolean! Denoting whether the element passes the callback and should (or should not) be a part of the copy.
  - What is `Array.filter` useful for?
    Easily creating subsections of other arrays that match some requirement that you test through the callback.

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
