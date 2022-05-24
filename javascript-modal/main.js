var $modalBtn = document.querySelector('.open-modal');
$modalBtn.addEventListener('click', cornerClick);

var $noBtn = document.querySelector('.no-thanks');
$noBtn.addEventListener('click', cornerClick);

var click = 0;

function cornerClick(event) {
  click++;
  if (click % 2 !== 0) {
    $modalBtn.className = 'background';
  } else if (click % 2 === 0) {
    $modalBtn.className = 'background2';
  }
}
