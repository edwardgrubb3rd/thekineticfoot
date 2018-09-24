import React, { Component } from 'react';

// Components
import Hero from '../components/global/Hero';

export default class Treatments extends Component {
  state = {
    data: {
      "heroCard": false,
      "title": "conditions and treatments",
      "content": "get back to doing what you love faster",
      "conditions": [
        {
          "name": "Accessory Navicular Syndrome",
          "link": "https://docs.google.com/document/d/1Z68c1Pb2NoMuEHcaSXmOjnaD2U6kuak7Uo3EbaPcPBM/edit",
          "description": "The accessory navicular (os navicularum or os tibiale externum) is an extra bone or piece of cartilage located on the inner side of the foot just above the arch."
        },
        {
          "name": "Achilles Tendon Disorders",
          "link": "https://docs.google.com/document/d/19bSK_vW4A-xhKgyt67OLjh9LOP_A-ctHKIqYqhDRy8g/edit",
          "description": "Achilles tendonitis is an inflammation of the Achilles tendon. Over time, if not resolved, the condition may progress to a degeneration of the tendon (Achilles tendonosis), in which the tendon loses its organized structure and is likely to develop microscopic tears."
        },
        {
          "name": "Ankle Fractures",
          "link": "https://docs.google.com/document/d/12E-tlff4TPNJeOBDewgRMBk9FoaIAoAx4g9E6fm6DOo/edit",
          "description": "A fracture is a partial or complete break in a bone. Fractures in the ankle can range from the less serious avulsion injuries (small pieces of bone that have been pulled off) to severe shattering-type breaks of the tibia, fibula or both."
        },
        {
          "name": "Ankle Sprain",
          "link": "https://docs.google.com/document/d/1crjZBIPDbphqP1o3-C05PpJZtSkB0uxgxiEHdbwLrY8/edit",
          "description": "An ankle sprain is an injury to one or more ligaments in the ankle, usually on the outside of the ankle. Ligaments are bands of tissue—like rubber bands—that connect one bone to another and bind the joints together."
        },
        {
          "name": "Bunions",
          "link": "https://docs.google.com/document/d/1X4xH1ru5yiKT9CDbw-PM7O3n3UW4mZu16gf3_u49oiU/edit",
          "description": "A bunion (also referred to as hallux valgus) is often described as a bump on the side of the big toe. But a bunion is more than that. The visible bump actually reflects changes in the bony framework of the front part of the foot."
        },
        {
          "name": "Chronic Ankle Instability",
          "link": "https://docs.google.com/document/d/1KS3Cr5sCXEqYs1LzMI0jY-v5ctzRfTbGBdYQgLj2zdk/edit",
          "description": "Chronic ankle instability is a condition characterized by a recurring giving way of the outer (lateral) side of the ankle. This condition often develops after repeated ankle sprains."
        },
        {
          "name": "Diabetic Complications",
          "link": "https://docs.google.com/document/d/1I4RRbpGIn5UU4IRU5u1Swz4K1190hiWaL_aJd6l5YK8/edit",
          "description": "People living with diabetes are prone to having foot problems, often because of two complications of diabetes: nerve damage (neuropathy) and poor circulation."
        },
        {
          "name": "Diabetic Care",
          "link": "https://docs.google.com/document/d/1_m5M-friR7XhLyTmD9FIG2lzIG0OQyZ9y6isLhaVB5Q/edit",
          "description": "Diabetes can be dangerous to your feet—even a small cut can produce serious consequences. Diabetes may cause nerve damage that takes away the feeling in your feet."
        },
        {
          "name": "Ganglion Cyst",
          "link": "https://docs.google.com/document/d/1pZ8O9vrORQsRjNfoQcZmuPYw-H53dF0Pt-0hL-Bc0bw/edit",
          "description": "A ganglion cyst is a sac filled with a jellylike fluid that originates from a tendon sheath or joint capsule. The word “ganglion” means knot and is used to describe the knot-like mass or lump that forms below the surface of the skin."
        },
        {
          "name": "Ingrown Toenails",
          "link": "https://docs.google.com/document/d/1vSV2vK3QEZwZ7WraWIpU4q91pf-fkL0f2R9d9GICKJU/edit",
          "description": "When a toenail is ingrown, it is curved and grows into the skin, usually at the nail borders (the sides of the nail). This digging in of the nail irritates the skin, often creating pain, redness, swelling and warmth in the toe."
        },
        {
          "name": "Orthotics",
          "link": "https://docs.google.com/document/d/17mG4ib-FSvQF-14XGE25pjrFXcX6zHfevpHCTXtZyJY/edit",
          "description": "Custom orthotics are medical devices prescribed by a foot and ankle surgeon. These are different from shoe inserts and arch supports in that they have two functions. Orthotics can be used to accommodate or offload a prominent area."
        },
        {
          "name": "Peroneal Tendon Injuries",
          "link": "https://docs.google.com/document/d/19CvxEVc5vE9u8F4CB66aEvf872gVKQ7GnbjW1WhuWXU/edit",
          "description": "The two peroneal tendons in the foot run side by side behind the outer ankle bone. The main function of the peroneal tendons is to stabilize the foot and ankle and protect them from sprains."
        },
        {
          "name": "Plantar Fasciitis",
          "link": "https://docs.google.com/document/d/1KAllqlLKH9W7CRPgMmApMxcYbyOneLfTEa145qhzaRk/edit",
          "description": "Heel pain is most often caused by plantar fasciitis, a condition that is sometimes also called heel spur syndrome when a spur is present. Heel pain may also be due to other causes, such as a stress fracture, tendonitis, arthritis, nerve irritation or, rarely, a cyst."
        },
        {
          "name": "Posterior Tibial Tendon Dysfunction (PTTD)",
          "link": "https://docs.google.com/document/d/1EOVaRerO4SqBl-jvWGQp1PJQUDNi0GUDYYs0qsjp1bM/edit#heading=h.gjdgxs",
          "description": "Posterior tibial tendon dysfunction (PTTD) is a condition caused by changes in the tendon, impairing its ability to support the arch. This results in flattening of the foot."
        },
        {
          "name": "Pre-dislocation Syndrome (Capsulitis)",
          "link": "https://docs.google.com/document/d/12H4mCBqqHdvYFwYVZ31RKlretix6tL83j7p8wysFNDU/edit",
          "description": "Capsulitis is a condition in which these ligaments have become inflamed. Although capsulitis can also occur in the joints of the third or fourth toes, it most commonly affects the second toe."
        },
        {
          "name": "Sesamoid Injuries",
          "link": "https://docs.google.com/document/d/1ejPQTUiIH7Khw8lVigt8kKn-cKA0HKInUROryPGf58U/edit",
          "description": "Sesamoid injuries can involve the bones, tendons and/or surrounding tissue in the joint. They are often associated with activities requiring increased pressure on the ball of the foot. In addition, people with high arches are at risk for developing sesamoid problems."
        },
        {
          "name": "Calcaneal Apophysitis (Sever's Disease)",
          "link": "https://docs.google.com/document/d/1oHJpJ0NUtwqeQUWtfQJGNIV4CuZKevp9-zXTxcaBdto/edit",
          "description": "It typically affects children between the ages of 8 and 14 years old, because the heel bone (calcaneus) is not fully developed until at least age 14. When there is too much repetitive stress on the growth plate, inflammation can develop."
        },
        {
          "name": "Vitamin D Deficiency",
          "link": "https://docs.google.com/document/d/1eS8EB-CXPBIvXWSiT0VQHbxkemIeqj5GNYcC2fXu_PM/edit",
          "description": "In the foot and ankle, stress fractures of the metatarsal bones and ankle may be seen in those with vitamin D deficiency, as well as generalized foot pain."
        }
      ]
    }
  }

  render() {
    return (
      <div className="treatments">
        <Hero
          heroCard={this.state.heroCard}
          title={this.state.title}
          content={this.state.content}
        />
        <div className="section treatment-grid">
          {
            this.state.data.conditions.map(({name, description, link}) => (
              <div className="treatment-card" key={name}>
                <span className="title-sm treatment-card-title">{name}</span>
                <p className="treatment-card-description">{description}</p>
                <a href={link} target="_blank" className="treatment-card-link">Learn More</a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
};
