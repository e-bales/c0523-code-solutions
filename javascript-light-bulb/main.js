const $lightbulb = document.querySelector('.bulb');
const $body = document.querySelector('body');
const bulbList = $lightbulb.classList;

function changeBulb(event) {
  if (bulbList[1] === 'on') {
    // want to turn off
    $body.className = 'dark';
    bulbList.replace('on', 'off');
  } else {
    // want to turn on
    $body.className = 'light';
    bulbList.replace('off', 'on');
  }
}

$lightbulb.addEventListener('click', changeBulb);
