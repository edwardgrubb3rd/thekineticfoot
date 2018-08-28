
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

app.get('/api/pages/contact', (req, res) => {
  res.json(
    {
      "title": "contact us",
      "form": {
        "form_title": "Message Us or to Schedule an Appointment",
        "button_text": "Send",
        "form_additional_info": "Please contact us directly with any questions, comments, or scheduling inquiries you may have. "
      },
      "hours_of_operation": [{
          "days": "Monday - Thursday",
          "hours": "8 AM – 5 PM"
        },
        {
          "days": "Friday",
          "hours": "8 AM - 3 PM"
        },
        {
          "days": "Saturday - Sunday",
          "hours": "Closed"
        }
      ],
      "emergency_contact": "Emergency Service: 24/7, on call"
    }
  )
});

app.get('/api/pages/about', (req, res) => {
  res.json(
    {
      "title": "About Us",
      "sections": [
        {
          "title": "Our Health Mission",
          "description": "Our experienced medical professionals are proud to put your healing needs first with care and compassion.",
          "image": "key.svg"
        },
        {
          "title": "Experience",
          "description": "With more than 15 years of experience, we assist you in creating a custom recovery plan that's right for you, so that you can get back to what you love faster.",
          "image": "doctor.svg"
        },
        {
          "title": "A Team Who Cares",
          "description": "We strive to help you improve your quality of life and achieve your wellness goals, so you can live your best life possible.",
          "image": "team.svg"
        }
      ],
      "button": "find out more",
      "link": "#"
    }
  )
});

app.get('/api/pages/footer', (req, res) => {
  res.json(
    {
      "social_media": [
        {
          "social_app": "Facebook",
          "link": "https://www.facebook.com/kineticfoot/"
        },
        {
          "social_app": "Twitter",
          "link": "https://twitter.com/kineticfoot"
        }
      ],
      "contact_info": {
        "street_address": "12510 East Iliff Avenue Ste. 120",
        "city": "Aurora",
        "state": "Colorado",
        "zip": "80014",
        "phone": "720.295.4864",
        "fax": "1.855.805.9391"
      }
    }
  )
});

app.get('/api/pages/hero', (req, res) => {
  res.json(
    {
      "img": [
        "hero1.jpg",
        "hero2.jpg",
        "hero3.jpg"
      ],
      "title": "The Kinetic Foot & Ankle Clinic",
      "content": "Advanced compassionate podiatry solutions in Denver",
      "button": "visit our clinic",
      "link": "https://www.google.com/maps?q=kinetic+foot+and+ankle+clinic&rlz=1C5CHFA_enUS797US797&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi7mLL13NbcAhVmw4MKHSOwAW0Q_AUICigB"
    }
  )
});

app.get('/api/pages/nav', (req, res) => {
  res.json(
    {
      "links": [
        {
          "title": "our team",
          "link": "#",
          "active": false
        },
        {
          "title": "our office",
          "link": "#",
          "active": false
        },
        {
          "title": "treatments",
          "link": "/treatments",
          "active": true
        },
        {
          "title": "Patient Documents",
          "active": true,
          "link": "#",
          "sublinks": [
            {
              "title": "Record Request",
              "link": "https://docs.google.com/document/d/1uQ0YMbGkGmrBEdn4PaRjYZRVi-Eqg48RRBvWE8OiYlc/edit?usp=sharing"
            },
            {
              "title": "Record Release",
              "link": "https://docs.google.com/document/d/1-2-1Q2YeJQdthJMemqW3PjwnW7kqV-3DAYmOZ-a0cBw/edit?usp=sharing"
            },
            {
              "title": "New Patient",
              "link": "https://docs.google.com/document/d/1YKlKyZD2zCZSbStIebEEe4pOgI71kexsQY35dxyeu6s/edit?usp=sharing"
            }
          ]
        }
      ],
      "contact": "720.295.4864",
      "logo": false
    }

  )
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

app.post('/thekineticfoot/contact', (req, res) => {
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
