const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (event) => {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      const tab = $tabList[i];
      if (event.target === tab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }

    for (let j = 0; j < $viewList.length; j++) {
      const dataView = event.target.getAttribute('data-view');
      const view = $viewList[j];
      const viewAttr = view.getAttribute('data-view');
      if (viewAttr === dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
});
