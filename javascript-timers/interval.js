const $display = document.querySelector('.countdown-display');
const intervalArray = ['3', '2', '1', '~Earth Beeeelooowww Us~'];
let counter = 0;

const intervalID = setInterval(countdownCallback, 1000);

function countdownCallback() {
  $display.textContent = intervalArray[counter];
  counter += 1;
  if (counter === intervalArray.length) {
    clearInterval(intervalID);
  }
}
