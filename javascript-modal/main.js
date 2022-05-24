var $modalBtn = document.querySelector('.open-modal');
$modalBtn.addEventListener('click', cornerClick);

var $noBtn = document.querySelector('.no-thanks');
$noBtn.addEventListener('click', cornerClick);

var $change = document.querySelector('.background');
var click = 0;

function cornerClick(event) {
  click++;
  if (click % 2 !== 0) {
    $change.className = 'background';
  } else if (click % 2 === 0) {
    $change.className = 'background unhidden';
  }
}
