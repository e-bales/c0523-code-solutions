# command-line-basics-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a CLI?
  A CLI is a command-line interface, which is a more direct (and initially intimidating) way of interacting with your computer and its files. Your average consumer will rarely if ever use a CLI, as they are more often reserved for developers.
- What is a GUI?
  A graphical user interface is, I'd argue, a more pleasant way of interacting with your computer, through visual icons and audio responses. GUI's are more intuitive and require less knowledge of commands, like those in CLI's, to find the file you want or run a program. These are more often aimed at consumers, but developers may use them too, like VS Code or PyCharm. Bc who wants to use a text editor like vim?
- Give at least one use case for each of the commands listed in this exercise.
  - `man`
    `man` is useful for displaying information about different CLI commands. One use case is running `man cat` so I know how to answer the next question correctly.
  - `cat`
    `cat` is concatenation and printing. If you call cat with just one file, the file will be output to the stardard output. If you call cat with multiple files, they will be con'cat'enated and output. If you want to view the contents of a file, use cat without having to open the file in a text editor.
  - `ls`
    `ls` 'lists' the contents of whatever directory/folder you provide. If you provide none, then it lists your current directory. This is very useful for viewing the structure of where you are, to let you navigate to find the correct file.
  - `pwd`
    `pwd` prints you current directory to whatever output you provide. This is useful if your CLI doesn't show your current working directory, and I can also see how in scripting this could make things easier to automate, as you have a way to print your current directory easily.
  - `echo`
    `echo` prints whatever string provided to whatever output provided. This can be useful for adding additionaly information to the end of a file, without having to open that file in a text editor.
  - `touch`
    `tag` updates the current access time of a file to be the current time. If the file doesn't exist, it creates the file, which is quite helpful as we may need to create files. Additionally, if you wish to act like you have been working when you haven't, you can call touch on files and hope your boss doesn't notice.
  - `mkdir`
    `mkdir` creates a directory, or a 'folder', which is very helpful in file management.
  - `mv`
    `mv` lets you 'move' or rename files, or move sources to a directory. Thsi is useful if you created a file in the wrong place, and need to move it to another directory. Or if you named something incorrectly.
  - `rm`
    `rm` lets you delete or 'remove' files. Thsi is helpful if you have unnecessary files in your directory, or if you want to delete your entire companies database on a Friday 1 hour before work.
  - `cp`
    Lets you create a copy of a provided file or directory at the source destination. This is useful if you want to work on a file without altering the original, and can't use github to make a new branch. That, or steal government secrets without them knowing >:).
- What are the three virtues of a great programmer?
  I could look it up but I'll do that next week (laziness), besides I should really be getting onto node.js by now (impatience), and I'm already too good of a programmer to care about 'virtues' (hubris).

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
