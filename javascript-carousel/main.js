var $first = document.querySelector('.first');
var $second = document.querySelector('.second');
var $third = document.querySelector('.third');
var $fourth = document.querySelector('.fourth');
var $fifth = document.querySelector('.fifth');
var $leftArrow = document.querySelector('.fa-solid.fa-angle-left');
var $rightArrow = document.querySelector('.fa-solid.fa-angle-right');
var $dot1 = document.querySelector('#first');
var $dot2 = document.querySelector('#second');
var $dot3 = document.querySelector('#third');
var $dot4 = document.querySelector('#fourth');
var $dot5 = document.querySelector('#fifth');

$dot1.addEventListener('click', dotOne);
function dotOne() {
  $first.className = 'first';
  $second.className = 'second hidden';
  $third.className = 'third hidden';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth hidden';
  $dot1.className = 'fa-regular fa-circle on';
  $dot2.className = 'fa-regular fa-circle';
  $dot3.className = 'fa-regular fa-circle';
  $dot4.className = 'fa-regular fa-circle';
  $dot5.className = 'fa-regular fa-circle';
}

$dot2.addEventListener('click', dotTwo);
function dotTwo() {
  $first.className = 'first hidden';
  $second.className = 'second';
  $third.className = 'third hidden';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth hidden';
  $dot1.className = 'fa-regular fa-circle';
  $dot2.className = 'fa-regular fa-circle on';
  $dot3.className = 'fa-regular fa-circle';
  $dot4.className = 'fa-regular fa-circle';
  $dot5.className = 'fa-regular fa-circle';

}

$dot3.addEventListener('click', dotThree);
function dotThree() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth hidden';
  $dot1.className = 'fa-regular fa-circle';
  $dot2.className = 'fa-regular fa-circle';
  $dot3.className = 'fa-regular fa-circle on';
  $dot4.className = 'fa-regular fa-circle';
  $dot5.className = 'fa-regular fa-circle';
}

$dot4.addEventListener('click', dotFourth);
function dotFourth() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third hidden';
  $fourth.className = 'fourth';
  $fifth.className = 'fifth hidden';
  $dot1.className = 'fa-regular fa-circle';
  $dot2.className = 'fa-regular fa-circle';
  $dot3.className = 'fa-regular fa-circle';
  $dot4.className = 'fa-regular fa-circle on';
  $dot5.className = 'fa-regular fa-circle';
}

$dot5.addEventListener('click', dotFifth);
function dotFifth() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third hidden';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth';
  $dot1.className = 'fa-regular fa-circle';
  $dot2.className = 'fa-regular fa-circle';
  $dot3.className = 'fa-regular fa-circle';
  $dot4.className = 'fa-regular fa-circle';
  $dot5.className = 'fa-regular fa-circle on';
}

$leftArrow.addEventListener('click', goBack);
function goBack() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $fifth.className = 'fifth';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle on';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $fourth.className = 'fourth';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle on';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $third.className = 'third';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle on';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $second.className = 'second';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle on';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $first.className = 'first';
    $dot1.className = 'fa-regular fa-circle on';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
  }
}

$rightArrow.addEventListener('click', goForward);
function goForward() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $second.className = 'second';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle on';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $third.className = 'third';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle on';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $fourth.className = 'fourth';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle on';
    $dot5.className = 'fa-regular fa-circle';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $fifth.className = 'fifth';
    $dot1.className = 'fa-regular fa-circle';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle on';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $first.className = 'first';
    $dot1.className = 'fa-regular fa-circle on';
    $dot2.className = 'fa-regular fa-circle';
    $dot3.className = 'fa-regular fa-circle';
    $dot4.className = 'fa-regular fa-circle';
    $dot5.className = 'fa-regular fa-circle';
  }
}

setInterval(goForward, 3000);
