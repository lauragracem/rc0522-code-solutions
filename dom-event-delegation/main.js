function clickDone(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
}

var $taskClick = document.querySelector('.task-list');
$taskClick.addEventListener('click', clickDone);
