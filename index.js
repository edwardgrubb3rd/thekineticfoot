
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
      user: 'house.marc01@gmail.com',
      clientId: '710045599777-g2432b7o8qcsb4nlf5upjd9t36bnpm3u.apps.googleusercontent.com',
      clientSecret: 'mrkSvbuIw1iw0RpbIMLbDuzH',
      refreshToken: '1/6Hx-fK1Z7lGUz_kKXL1bdUic-CyPOPqgLaQRybeChsc'
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
