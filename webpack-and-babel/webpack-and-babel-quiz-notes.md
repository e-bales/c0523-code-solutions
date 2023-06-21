# webpack-and-babel-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Webpack?
  Webpack is the most popular bundler for Web applications, and a bundler is a tool that 'bundles' all your code into fewer files while paring down on unneeded code to optimize what is sent to the browser for download.
- What is the advantage of using Webpack (or a similar bundler)?
  Since people are installing more and more packages with more and more dependencies, the amount of files a browser would need to download to load a website was becoming too much. Therefore, bundlers pare down our files and code while keeeping the functionality to reduce what a browser needs to download. This optimizes performance and reduces unnecessary bloat.
- What is Babel?
  Babel is a transpiler, which basically refactors code built in one high-level language to another high-level language. Babel specifically converts newer Javascript (ES6) into older javascript in order for the code to be run on older browsers.
- What is the advantage of using Babel (or a similar transpiler)?
  The internet existed before 2015, so in order for code written on newer Javascript to be loaded in older broswers or environments, transpilers like Babel convert to the correct format/syntax. This is obviously advantageous as it allows us to make use of new features while not having to worry about compatibility.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
