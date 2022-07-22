const fs = require('fs');

const fileName = 'dijkstra.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
