const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName : ', event.target.tagName);
  if (event.target.matches('button')) {
    const $taskItem = event.target.closest('.task-list-item');
    console.log($taskItem);
    $taskItem.remove();
  }
});
