const $leftArrow = document.querySelector('.fa-arrow-left');
const $rightArrow = document.querySelector('.fa-arrow-right');

const $firstDot = document.querySelector('[data-circle="1"]');
const $secondDot = document.querySelector('[data-circle="2"]');
const $thirdDot = document.querySelector('[data-circle="3"]');
const $fourthDot = document.querySelector('[data-circle="4"]');
const $fifthDot = document.querySelector('[data-circle="5"]');
const $circlesContainer = document.querySelector('.circles-container');
const dotArray = [$firstDot, $secondDot, $thirdDot, $fourthDot, $fifthDot];

const $image = document.querySelector('img');
const imagesArray = ['001.png', '004.png', '007.png', '025.png', '039.png'];

console.log($thirdDot);
console.log($leftArrow);
console.log($image);

let positionCounter = 0;
let intervalID;
const totalImages = imagesArray.length - 1;

function updateScreen(previousPos, newPos) {
  const $prevDot = dotArray[previousPos];
  const $newDot = dotArray[newPos];

  $prevDot.classList.add('fa-regular');
  $prevDot.classList.remove('fa-solid');

  $newDot.classList.add('fa-solid');
  $newDot.classList.remove('fa-regular');

  const newImageSrc = 'images/' + imagesArray[newPos];
  $image.setAttribute('src', newImageSrc);
}

function arrowGoBack() {
  clearInterval(intervalID);
  const previousP = positionCounter;
  if (positionCounter === 0) {
    positionCounter = totalImages;
  } else {
    positionCounter--;
  }
  const newP = positionCounter;
  resumeForward();
  updateScreen(previousP, newP);
}

function arrowGoForward() {
  clearInterval(intervalID);
  const prevP = positionCounter;
  if (positionCounter === totalImages) {
    positionCounter = 0;
  } else {
    positionCounter++;
  }
  const newP = positionCounter;
  resumeForward();
  updateScreen(prevP, newP);
}

function dotClick(dotClicked) {
  if (dotClicked.tagName === 'I') {
    clearInterval(intervalID);
    const $prevDot = dotArray[positionCounter];
    $prevDot.classList.add('fa-regular');
    $prevDot.classList.remove('fa-solid');

    dotClicked.classList.add('fa-solid');
    dotClicked.classList.remove('fa-regular');

    positionCounter = Number(dotClicked.dataset.circle) - 1;
    const newImageSrc = 'images/' + imagesArray[positionCounter];
    $image.setAttribute('src', newImageSrc);

    resumeForward();
  }
}

function resumeForward() {
  intervalID = setInterval(() => {
    const prevP = positionCounter;
    if (positionCounter % totalImages === 0 && positionCounter !== 0) {
      positionCounter = 0;
    } else {
      positionCounter++;
    }
    const newP = positionCounter;
    updateScreen(prevP, newP);
  }, 3000);
}

resumeForward();

$rightArrow.addEventListener('click', arrowGoForward);
$leftArrow.addEventListener('click', arrowGoBack);

$circlesContainer.addEventListener('click', (event) => {
  dotClick(event.target);
});
