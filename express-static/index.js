const path = require('path');
const express = require('express');

const app = express();
const join = path.join(__dirname, 'public');
console.log(join);

const staticMiddleware = express.static(join);

app.use(staticMiddleware);

app.listen(3000, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', 3000);
});
