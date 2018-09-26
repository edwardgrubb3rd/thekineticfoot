
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
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
});

// Pages
app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to The Kinetic Foot API",
    clientEndpoints: [
      {
        method: 'GET',
        path: '/api/pages',
        description: 'Get all pages'
      },
      {
        method: 'POST',
        path: '/api/pages',
        description: 'Add a new page to the database'
      },
      {
        method: 'SHOW',
        path: '/api/pages/:id',
        description: 'Show one page section data'
      },
      {
        method: 'PUT',
        path: '/api/pages/:id',
        description: 'Update page information'
      },
      {
        method: 'DELETE',
        path: '/api/pages/:id',
        description: 'Delete a page from the database'
      }
    ]
  })
});

// Emailing
app.post('/contact', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.thekineticfoot.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mhouse@thekineticfoot.com',
      password: 'Mullenix6!'
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
