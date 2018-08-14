
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

// Emailing
app.post('/contact', (req, res) => {
  console.log(req);

  let success = {message: 'success'};

  res.status(200).json(success);
  res.end();
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on 3001');
});
