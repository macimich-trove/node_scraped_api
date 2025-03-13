const express = require('express');
const app = express();
const port = 3000;
const morganlogs = require('morgan');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/stats', (req, res) => {

console.log("New Route accessed")
res.send('stats route');


//TODO: Send route stats
//    : and JSON payload
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
