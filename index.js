
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
      "hero_card": true,
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

app.get('/api/pages/treatments', (req, res) => {
  res.json({
    "hero_card": false,
    "title": "conditions and treatments",
    "content": "get back to doing what you love faster",
    "treatments": [
      {
        "name": "Accessory Navicular Syndrome",
        "id": "accessory-navicular-syndrome",
        "description": "The accessory navicular (os navicularum or os tibiale externum) is an extra bone or piece of cartilage located on the inner side of the foot just above the arch."
      },
      {
        "name": "Achilles Tendon Disorders",
        "id": "achilles-tendon-disorders",
        "description": "Achilles tendonitis is an inflammation of the Achilles tendon. Over time, if not resolved, the condition may progress to a degeneration of the tendon (Achilles tendonosis), in which the tendon loses its organized structure and is likely to develop microscopic tears."
      },
      {
        "name": "Ankle Fractures",
        "id": "ankle-fractures",
        "description": "A fracture is a partial or complete break in a bone. Fractures in the ankle can range from the less serious avulsion injuries (small pieces of bone that have been pulled off) to severe shattering-type breaks of the tibia, fibula or both."
      },
      {
        "name": "Ankle Sprain",
        "id": "ankle-sprain",
        "description": "An ankle sprain is an injury to one or more ligaments in the ankle, usually on the outside of the ankle. Ligaments are bands of tissue—like rubber bands—that connect one bone to another and bind the joints together."
      },
      {
        "name": "Bunions",
        "id": "bunions",
        "description": "A bunion (also referred to as hallux valgus) is often described as a bump on the side of the big toe. But a bunion is more than that. The visible bump actually reflects changes in the bony framework of the front part of the foot."
      },
      {
        "name": "Chronic Ankle Instability",
        "id": "chronic-ankle-instability",
        "description": "Chronic ankle instability is a condition characterized by a recurring giving way of the outer (lateral) side of the ankle. This condition often develops after repeated ankle sprains."
      },
      {
        "name": "Diabetic Complications",
        "id": "diabetes",
        "description": "People living with diabetes are prone to having foot problems, often because of two complications of diabetes: nerve damage (neuropathy) and poor circulation."
      },
      {
        "name": "Ganglion Cyst",
        "id": "ganglion-cyst",
        "description": "A ganglion cyst is a sac filled with a jellylike fluid that originates from a tendon sheath or joint capsule. The word “ganglion” means knot and is used to describe the knot-like mass or lump that forms below the surface of the skin."
      },
      {
        "name": "Ingrown Toenails",
        "id": "ingrown-toenails",
        "description": "When a toenail is ingrown, it is curved and grows into the skin, usually at the nail borders (the sides of the nail). This digging in of the nail irritates the skin, often creating pain, redness, swelling and warmth in the toe."
      },
      {
        "name": "Orthotics",
        "id": "orthotics",
        "description": "Custom orthotics are medical devices prescribed by a foot and ankle surgeon. These are different from shoe inserts and arch supports in that they have two functions. Orthotics can be used to accommodate or offload a prominent area."
      },
      {
        "name": "Peroneal Tendon Injuries",
        "id": "peroneal-tendon-injuries",
        "description": "The two peroneal tendons in the foot run side by side behind the outer ankle bone. The main function of the peroneal tendons is to stabilize the foot and ankle and protect them from sprains."
      },
      {
        "name": "Plantar Fasciitis",
        "id": "plantar-fasciitis",
        "description": "Heel pain is most often caused by plantar fasciitis, a condition that is sometimes also called heel spur syndrome when a spur is present. Heel pain may also be due to other causes, such as a stress fracture, tendonitis, arthritis, nerve irritation or, rarely, a cyst."
      },
      {
        "name": "Posterior Tibial Tendon Dysfunction (PTTD)",
        "id": "pttd",
        "description": "Posterior tibial tendon dysfunction (PTTD) is a condition caused by changes in the tendon, impairing its ability to support the arch. This results in flattening of the foot."
      },
      {
        "name": "Pre-dislocation Syndrome (Capsulitis)",
        "id": "capsulitis",
        "description": "Capsulitis is a condition in which these ligaments have become inflamed. Although capsulitis can also occur in the joints of the third or fourth toes, it most commonly affects the second toe."
      },
      {
        "name": "Sesamoid Injuries",
        "id": "sesamoid",
        "description": "Sesamoid injuries can involve the bones, tendons and/or surrounding tissue in the joint. They are often associated with activities requiring increased pressure on the ball of the foot. In addition, people with high arches are at risk for developing sesamoid problems."
      },
      {
        "name": "Calcaneal Apophysitis (Sever's Disease)",
        "id": "servers-disease",
        "description": "It typically affects children between the ages of 8 and 14 years old, because the heel bone (calcaneus) is not fully developed until at least age 14. When there is too much repetitive stress on the growth plate, inflammation can develop."
      },
      {
        "name": "Vitamin D Deficiency",
        "id": "vitamin-d",
        "description": "In the foot and ankle, stress fractures of the metatarsal bones and ankle may be seen in those with vitamin D deficiency, as well as generalized foot pain."
      }
    ]
  })
})

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

app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on 3001');
});
