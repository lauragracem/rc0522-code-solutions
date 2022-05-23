
function buttonClicks(event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks <= 4 && clicks >= 0) {
    $button.className = 'hot-button cold';
  } else if (clicks <= 7 && clicks >= 5) {
    $button.className = 'hot-button cool';
  } else if (clicks <= 10 && clicks >= 8) {
    $button.className = 'hot-button tepid';
  } else if (clicks <= 13 && clicks >= 11) {
    $button.className = 'hot-button warm';
  } else if (clicks <= 16 && clicks >= 14) {
    $button.className = 'hot-button hot';
  } else if (clicks >= 17) {
    $button.className = 'hot-button nuclear';
  }
}

var clicks = 0;
var $button = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$button.addEventListener('click', buttonClicks);
