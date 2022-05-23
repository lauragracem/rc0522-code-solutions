function handleclick(event) {
  console.log('button clicked');
}

var $clickMe = document.querySelector('.click-button');
$clickMe.addEventListener('click', handleclick);
console.log($clickMe);

function handleMouseover(event) {
  console.log('Hover Me!');
}

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', handleMouseover);
console.log($mouseOver);

function handleDoubleClick(event) {
  console.log('Double Click Me!');
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
console.log($doubleClick);
