const $openButton = document.querySelector('.open');
const $closeButton = document.querySelector('.close');

const $modal = document.querySelector('.modal');

function openModal(event) {
  const modalList = $modal.classList;
  modalList.remove('unseen');
}

function closeModal(event) {
  const modalList = $modal.classList;
  modalList.add('unseen');
}

$openButton.addEventListener('click', openModal);
$closeButton.addEventListener('click', closeModal);
