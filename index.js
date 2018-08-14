
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

// Emailing
app.post('/contact', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'trevans24@gmail.com',
      clientId: '106001694039-9ttiim7caliihojo8aiaasar6hndd1nu.apps.googleusercontent.com',
      clientSecret: 'CdgCi0rtlGY2aOP_e2dxO4J4',
      refreshToken: '1/MeYeW3iIROpttVEd-zsgVyozhj1kck2kkW5hMILrxoI'
    }
  });

  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: 'trevans24@gmail.com',
    subject: 'Message from The Kinetic Foot Contact Form',
    text: `${req.body.message}`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log('send error', err);
    }
    else {
      console.log('sent', info.messageId);
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on 3001');
});
