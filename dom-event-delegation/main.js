var $taskClick = document.querySelector('.task-list');
$taskClick.addEventListener('click', clickDone);

function clickDone(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log('event.target.closest:', event.target.closest('.task-list-item'));
    var closest = event.target.closest('.task-list-item');
    closest.remove();
  }
}
