
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
          "description": "Our experienced medical professionals put your healing needs first with care and compassion. We are proud to provide a high quality level of customer service, medical experience, and commitment to health and wellness to all our patients.",
          "image": "key.svg"
        },
        {
          "title": "Experience",
          "description": "With more than 15 years of experience, we assist you in creating a custom recovery plan that's right for you, so that you can get back to what you love faster.",
          "image": "doctor.svg"
        },
        {
          "title": "A Team Who Cares",
          "description": "We strive to help you improve your quality of life and achieve your wellness goals, so you can live your best life possible. Our team aims to provide you with the highest quality treatments to help you get back on track.",
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
        "phone": "720-295-4864",
        "fax": "855-805-9391"
      }
    }
  )
});

app.get('/api/pages/hero', (req, res) => {
  res.json(
    {
      "img": "hero.jpg",
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
          "active": true
        },
        {
          "title": "our office",
          "link": "#",
          "active": true
        },
        {
          "title": "advanced therapies",
          "link": "#",
          "active": true
        },
        {
          "title": "Patient Documents",
          "link": "#",
          "active": true,
          "options": [
            {
              "title": "forms",
              "options": [
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
            },
            {
              "title": "handouts",
              "options": [
                {
                  "title": "Accessory Navicular",
                  "link": "https://docs.google.com/document/d/1Z68c1Pb2NoMuEHcaSXmOjnaD2U6kuak7Uo3EbaPcPBM/edit?usp=sharing"
                },
                {
                  "title": "Achilles Tendon",
                  "link": "https://docs.google.com/document/d/19bSK_vW4A-xhKgyt67OLjh9LOP_A-ctHKIqYqhDRy8g/edit?usp=sharing"
                },
                {
                  "title": "Ankle Fracture",
                  "link": "https://docs.google.com/document/d/12E-tlff4TPNJeOBDewgRMBk9FoaIAoAx4g9E6fm6DOo/edit?usp=sharing"
                },
                {
                  "title": "Ankle Sprain",
                  "link": "https://docs.google.com/document/d/1crjZBIPDbphqP1o3-C05PpJZtSkB0uxgxiEHdbwLrY8/edit?usp=sharing"
                },
                {
                  "title": "Bunion",
                  "link": "https://docs.google.com/document/d/1X4xH1ru5yiKT9CDbw-PM7O3n3UW4mZu16gf3_u49oiU/edit?usp=sharing"
                },
                {
                  "title": "Chronic Ankle Instability",
                  "link": "https://docs.google.com/document/d/1KS3Cr5sCXEqYs1LzMI0jY-v5ctzRfTbGBdYQgLj2zdk/edit?usp=sharing"
                },
                {
                  "title": "Diabetes Amputation Prevention",
                  "link": "https://docs.google.com/document/d/1I4RRbpGIn5UU4IRU5u1Swz4K1190hiWaL_aJd6l5YK8/edit?usp=sharing"
                },
                {
                  "title": "Diabetes Foot Care Guidelines",
                  "link": "https://docs.google.com/document/d/1_m5M-friR7XhLyTmD9FIG2lzIG0OQyZ9y6isLhaVB5Q/edit?usp=sharing"
                },
                {
                  "title": "Ganglion Cyst",
                  "link": "https://docs.google.com/document/d/1pZ8O9vrORQsRjNfoQcZmuPYw-H53dF0Pt-0hL-Bc0bw/edit?usp=sharing"
                },
                {
                  "title": "Ingrown Toenail",
                  "link": "https://docs.google.com/document/d/1vSV2vK3QEZwZ7WraWIpU4q91pf-fkL0f2R9d9GICKJU/edit?usp=sharing"
                },
                {
                  "title": "Orthotics",
                  "link": "https://docs.google.com/document/d/17mG4ib-FSvQF-14XGE25pjrFXcX6zHfevpHCTXtZyJY/edit?usp=sharing"
                },
                {
                  "title": "Peroneal Tendon Injuries",
                  "link": "https://docs.google.com/document/d/19CvxEVc5vE9u8F4CB66aEvf872gVKQ7GnbjW1WhuWXU/edit?usp=sharing"
                },
                {
                  "title": "Plantar Fasciitis",
                  "link": "https://docs.google.com/document/d/1KAllqlLKH9W7CRPgMmApMxcYbyOneLfTEa145qhzaRk/edit?usp=sharing"
                },
                {
                  "title": "Pre-dislocation syndrome",
                  "link": "https://docs.google.com/document/d/12H4mCBqqHdvYFwYVZ31RKlretix6tL83j7p8wysFNDU/edit?usp=sharing"
                },
                {
                  "title": "Posterior Tibial Tendon Dysfunction",
                  "link": "https://docs.google.com/document/d/1EOVaRerO4SqBl-jvWGQp1PJQUDNi0GUDYYs0qsjp1bM/edit?usp=sharing"
                },
                {
                  "title": "Sesamoid Injuries",
                  "link": "https://docs.google.com/document/d/1ejPQTUiIH7Khw8lVigt8kKn-cKA0HKInUROryPGf58U/edit?usp=sharing"
                },
                {
                  "title": "Sever's Disease",
                  "link": "https://docs.google.com/document/d/1oHJpJ0NUtwqeQUWtfQJGNIV4CuZKevp9-zXTxcaBdto/edit?usp=sharing"
                },
                {
                  "title": "Vitamin D Deficiency",
                  "link": "https://docs.google.com/document/d/1eS8EB-CXPBIvXWSiT0VQHbxkemIeqj5GNYcC2fXu_PM/edit?usp=sharing"
                }
              ]
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
