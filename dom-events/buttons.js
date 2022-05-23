function handleclick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $clickMe = document.querySelector('.click-button');
$clickMe.addEventListener('click', handleclick);

function handleMouseover(event) {
  console.log('Hover Me!');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Double Click Me!');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
