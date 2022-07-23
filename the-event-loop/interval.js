let count = 3;

const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
  }
  if (count <= 0) {
    clearInterval(timer);
  }
}, '1000');
