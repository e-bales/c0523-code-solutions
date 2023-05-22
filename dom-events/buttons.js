function handleClick(event) {
  console.log('button clicked!');
  console.log(event);
  console.log(event.target);
}

const $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);
$clickButton.addEventListener('dblclick', () => {
  console.log('Woah there Nelly');
}); // ask about this!

function mouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', mouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
