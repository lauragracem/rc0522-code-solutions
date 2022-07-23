const express = require('express');
const app = express();

const nextID = 1;
const grades = {};

// app.METHOD(PATH, HANDLER);

app.get('/api/grades', (req, res) => {
  res.json({ grades });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
