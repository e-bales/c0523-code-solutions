let numClicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $documentClicks = document.querySelector('.click-count');

console.log($documentClicks);

$hotButton.addEventListener('click', () => {
  numClicks++;
  $documentClicks.textContent = `Clicks: ${numClicks}`;
  if (numClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
