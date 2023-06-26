# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM is a software registry that allows Javascript developer to share and use eachother's code, often called packages, to bring in functionality to their application.
- What is a package?
  A package is a collection of code someone has uploaded for use, which other users can download and user in their own development area. If you want to update a package, npm makes it easy for all those who have a dependency on your package to upgrade.
- What are some other popular package managers?
  Yarn, PNPM (and pip for python!)
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  A dependecy is another package that you have downloaded to make your application work. That way, when you upload your package, user's know they must also use your dependencies to use your package.
- What happens when you add a dependency to a package with `npm`?
  Your package.json gets updated to include whatever package you downloaded as a dependency.
- What is a devDependency and how do you add one to a package?
  They are dependencies that are only used for development and are not necessary to actually run your application. Examples are eslint or jest. To add them you must include the --save-dev option when using npm install commands.
- How do you define and run `npm` scripts? Why are these useful?
  You define them within your package.json by adding a scripts object, and then you include keys with the script names and whatever command line scripts you want as values. These are helpful as it lets developers easily share development commands between one another, for example you could include information about your package, possible error solutions, etc., and all the other developer would have to do would be to type your command to get the info in their terminal.

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
