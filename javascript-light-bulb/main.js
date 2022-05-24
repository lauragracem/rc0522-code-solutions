var $clickButton = document.querySelector('.click-button');
var $container = document.querySelector('#container');
$clickButton.addEventListener('click', clickButton);

var click = 0;

function clickButton(event) {
  click++;
  if (click % 2 === 0) {
    $clickButton.className = 'click-button on';
    $container.className = 'container';
  } else if (click % 2 !== 0) {
    $clickButton.className = 'click-button off';
    $container.className = 'container off';
  }
}
