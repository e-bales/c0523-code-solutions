const $spanList = document.querySelectorAll('span');
const $button = document.querySelector('.button-div');
const $accuracyWrap = document.querySelector('div.accuracy-wrap');
const $accuracy = document.querySelector('.accuracy');

let counter = 0;
let incorrect = 0;
let ended = false;

document.addEventListener('keydown', (event) => {
  if (counter < $spanList.length) {
    const currChar = $spanList[counter];
    if (currChar.textContent === event.key) {
      currChar.className = 'completed';
      if (counter !== $spanList.length - 1) {
        $spanList[counter + 1].className = 'current';
      }
      counter += 1;
    } else {
      currChar.className = 'wrong';
      incorrect += 1;
    }
  }

  if (counter === $spanList.length && !ended) {
    ended = true;
    const text = $accuracy.textContent + incorrect;
    $accuracy.textContent = text;
    $accuracyWrap.classList.remove('unseen');
    $button.classList.remove('unseen');
  }
});

$button.addEventListener('click', () => {
  counter = 0;
  incorrect = 0;
  ended = false;
  for (let i = 0; i < $spanList.length; i++) {
    $spanList[i].classList.remove('completed');
  }
  $spanList[0].className = 'current';
  $accuracyWrap.classList.add('unseen');
  $button.classList.add('unseen');
  $accuracy.textContent = 'You mistyped this many times: ';
});
