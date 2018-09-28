
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('prerender-node')
  .set('prerenderToken', 'ms0jRShRz2guknPunP9n')
  );

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['https://thekineticfoot.com']);
  next();
});

// Pages
app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to The Kinetic Foot API",
    clientEndpoints: [
      {
        method: 'POST',
        path: '/api/contact',
        description: 'Contact Form Emailing'
      }
    ]
  })
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
      clientId: '106001694039-9c9sf90sccoecjbskll5u0r4nvdchio7.apps.googleusercontent.com',
      clientSecret: 'wYluNHxCohGG0ycWz8FkFXQp',
      refreshToken: '1/MeYeW3iIROpttVEd-zsgVyozhj1kck2kkW5hMILrxoI'
    }
  });

  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: 'mhouse2@yahoo.com',
    subject: 'Message from The Kinetic Foot Contact Form',
    text: `${req.body.message}`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log('send error', err);
    }
    else {
      return {
        status: 200,
        message: "successfully sent"
      }
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on 3001');
});
