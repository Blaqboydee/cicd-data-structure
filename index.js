const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('My name is Dee');
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});