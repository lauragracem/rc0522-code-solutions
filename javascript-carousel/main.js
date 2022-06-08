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
}

$dot2.addEventListener('click', dotTwo);
function dotTwo() {
  $first.className = 'first hidden';
  $second.className = 'second';
  $third.className = 'third hidden';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth hidden';

}

$dot3.addEventListener('click', dotThree);
function dotThree() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth hidden';
}

$dot4.addEventListener('click', dotFourth);
function dotFourth() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third hidden';
  $fourth.className = 'fourth';
  $fifth.className = 'fifth hidden';
}

$dot5.addEventListener('click', dotFifth);
function dotFifth() {
  $first.className = 'first hidden';
  $second.className = 'second hidden';
  $third.className = 'third hidden';
  $fourth.className = 'fourth hidden';
  $fifth.className = 'fifth';
}

$leftArrow.addEventListener('click', goBack);
function goBack() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $fifth.className = 'fifth';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $fourth.className = 'fourth';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $third.className = 'third';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $second.className = 'second';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $first.className = 'first';
  }
}

$rightArrow.addEventListener('click', goForward);
function goForward() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $second.className = 'second';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $third.className = 'third';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $fourth.className = 'fourth';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $fifth.className = 'fifth';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $first.className = 'first';
  }
}
