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
          "link": "https://docs.google.com/document/d/1JaLUG3X_c5Env1M81BI5VcMC2M6OMidhSvawXvF1t4Y/edit?usp=sharing",
          "description": "The accessory navicular (os navicularum or os tibiale externum) is an extra bone or piece of cartilage located on the inner side of the foot just above the arch."
        },
        {
          "name": "Achilles & Plantar Fascia Stretches",
          "link": "https://docs.google.com/document/d/1t4yE_NaEGvyBHpxdyNb9sWRjP7tw3FIqr0qk_ussAx0/edit?usp=sharing",
          "description": "Stretching exercise to help you out"
        },
        {
          "name": "Achilles Tendon Disorders",
          "link": "https://docs.google.com/document/d/1pOkC5yi7nXDmPp3-zhFm6xqyfgYItIT0gcGCBZkftkk/edit?usp=sharing",
          "description": "Achilles tendonitis is an inflammation of the Achilles tendon. Over time, if not resolved, the condition may progress to a degeneration of the tendon (Achilles tendonosis), in which the tendon loses its organized structure and is likely to develop microscopic tears."
        },
        {
          "name": "Ankle Fractures",
          "link": "https://docs.google.com/document/d/1WyfBOe626FCWMWQQ--f71Z4z9DJCuURVhj3mIa7rFR0/edit?usp=sharing",
          "description": "A fracture is a partial or complete break in a bone. Fractures in the ankle can range from the less serious avulsion injuries (small pieces of bone that have been pulled off) to severe shattering-type breaks of the tibia, fibula or both."
        },
        {
          "name": "Ankle Sprain",
          "link": "https://docs.google.com/document/d/1yDhK5MBP_OzQQ4NcPcekxt9Bphvh2s2-tcgUrAyZ3y4/edit?usp=sharing",
          "description": "An ankle sprain is an injury to one or more ligaments in the ankle, usually on the outside of the ankle. Ligaments are bands of tissue—like rubber bands—that connect one bone to another and bind the joints together."
        },
        {
          "name": "Bunions",
          "link": "https://docs.google.com/document/d/1Tn3hI4wQlMzQVe_pEuB6tl1cYR5svN3adOhEFx-aaYw/edit?usp=sharing",
          "description": "A bunion (also referred to as hallux valgus) is often described as a bump on the side of the big toe. But a bunion is more than that. The visible bump actually reflects changes in the bony framework of the front part of the foot."
        },
        {
          "name": "Chronic Ankle Instability",
          "link": "https://docs.google.com/document/d/1Q13a2QA6xRLb-4O-tU5qE3AIGp83naBNW1sC4OLhJbE/edit?usp=sharing",
          "description": "Chronic ankle instability is a condition characterized by a recurring giving way of the outer (lateral) side of the ankle. This condition often develops after repeated ankle sprains."
        },
        {
          "name": "Diabetic Complications & Amputation Prevention",
          "link": "https://docs.google.com/document/d/1zzISGr3G5MKdHJURswGRt2EoSUd_PT_55kuKCMHIeIA/edit?usp=sharing",
          "description": "People living with diabetes are prone to having foot problems, often because of two complications of diabetes: nerve damage (neuropathy) and poor circulation."
        },
        {
          "name": "Diabetic Foot Care",
          "link": "https://docs.google.com/document/d/1Fg_nvfXxJ9Y_dMn5eVUgirVBZJ4trxfEWvK13-a0t2Q/edit?usp=sharing",
          "description": "Diabetes can be dangerous to your feet—even a small cut can produce serious consequences. Diabetes may cause nerve damage that takes away the feeling in your feet."
        },
        {
          "name": "Ganglion Cyst",
          "link": "https://docs.google.com/document/d/1Ma1DnqzEOit4sWMxbtr8YkZ6Rdc_oHj24F6VsKLcjMw/edit?usp=sharing",
          "description": "A ganglion cyst is a sac filled with a jellylike fluid that originates from a tendon sheath or joint capsule. The word “ganglion” means knot and is used to describe the knot-like mass or lump that forms below the surface of the skin."
        },
        {
          "name": "Gout",
          "link": "https://docs.google.com/document/d/1uCTXhiAkj46hpcvtEmh3Ex5a8YASsVns05-P5EOMPac/edit?usp=sharing",
          "description": "Gout is a disorder that results from the buildup of uric acid in the tissues or a joint. It most often affects the joint of the big toe."
        },
        {
          "name": "Hallux Rigidus/Limitus",
          "link": "https://docs.google.com/document/d/1mG_XJvhj0gWr7Pf_kXGc47SmG34Qj1D160UlizvmiTM/edit?usp=sharing",
          "description": "Hallux rigidus is a disorder of the joint located at the base of the big toe. It causes pain and stiffness in the joint, and with time, it gets increasingly harder to bend the toe."
        },
        {
          "name": "Hammertoe",
          "link": "https://docs.google.com/document/d/11ssc9NpcpDNSh8efRsdHPX0AdnYCPpcvxhRT0yTxzI4/edit?usp=sharing",
          "description": "Hammertoe is a contracture (bending) deformity of one or both joints of the second, third, fourth or fifth (little) toes. This abnormal bending can put pressure on the toe when wearing shoes, causing problems to develop."
        },
        {
          "name": "Ingrown Toenails",
          "link": "https://docs.google.com/document/d/16X2LLZIcVoSmcOIGybFIvNbDyAmAJ_KEZ1h_42GQ4aQ/edit?usp=sharing",
          "description": "When a toenail is ingrown, it is curved and grows into the skin, usually at the nail borders (the sides of the nail). This digging in of the nail irritates the skin, often creating pain, redness, swelling and warmth in the toe."
        },
        {
          "name": "Morton's Neuroma",
          "link": "https://docs.google.com/document/d/1cZfHepg5CU-NuqIcCwX2VZyIgeCaq6dlKJ8mFlg7lIQ/edit?usp=sharing",
          "description": "A neuroma is a thickening of nerve tissue that may develop in various parts of the body. The most common neuroma in the foot is a Morton’s neuroma, which occurs between the third and fourth toes. It is sometimes referred to as an intermetatarsal neuroma."
        },
        {
          "name": "Diabetic Peripheral Neuropathy",
          "link": "https://docs.google.com/document/d/1ALtjfVOleeCPwaARkJA9QlHiPq5_Ho__Glp35Nm7s1I/edit?usp=sharing",
          "description": "Diabetic neuropathy is nerve damage caused by diabetes. When it affects the arms, hands, legs and feet, it is known as diabetic peripheral neuropathy. Diabetic peripheral neuropathy is different from peripheral arterial disease (poor circulation), which affects the blood vessels rather than the nerves."
        },
        {
          "name": "Peroneal Tendon Injuries",
          "link": "https://docs.google.com/document/d/14ez-TXm7_152PgdNqUUe3qzvuRGw344Em0UM7VpQNyI/edit?usp=sharing",
          "description": "The two peroneal tendons in the foot run side by side behind the outer ankle bone. The main function of the peroneal tendons is to stabilize the foot and ankle and protect them from sprains."
        },
        {
          "name": "Plantar Fasciitis",
          "link": "https://docs.google.com/document/d/1ZJu30vzbfVofC2yRaWksc7pinepCYJgw9A8nOFmlFvc/edit?usp=sharing",
          "description": "Heel pain is most often caused by plantar fasciitis, a condition that is sometimes also called heel spur syndrome when a spur is present. Heel pain may also be due to other causes, such as a stress fracture, tendonitis, arthritis, nerve irritation or, rarely, a cyst."
        },
        {
          "name": "Post Operation Nail Instructions",
          "link": "https://docs.google.com/document/d/1QN92zHKp-PTDIXmFvkJAz9VBF5qunwSqvzFg3y9xh10/edit?usp=sharing"
        },
        {
          "name": "Posterior Tibial Tendon Dysfunction (PTTD)",
          "link": "https://docs.google.com/document/d/1UM8-6_Ub2p0MSEnqfU4HgSTt1oJRMWq7cR84DZ0Ditk/edit?usp=sharing",
          "description": "Posterior tibial tendon dysfunction (PTTD) is a condition caused by changes in the tendon, impairing its ability to support the arch. This results in flattening of the foot."
        },
        {
          "name": "Pre-dislocation Syndrome (Capsulitis)",
          "link": "https://docs.google.com/document/d/1f52iGbPy4qQd9aB6yGhH0gBBfKssSFgGZN0DM5IZH6I/edit?usp=sharing",
          "description": "Capsulitis is a condition in which these ligaments have become inflamed. Although capsulitis can also occur in the joints of the third or fourth toes, it most commonly affects the second toe."
        },
        {
          "name": "Sesamoid Injuries",
          "link": "https://docs.google.com/document/d/1LYeh29TMkNJ4sfwT8fk6Nq6JkOpMv35BnKbPaY_uA_A/edit?usp=sharing",
          "description": "Sesamoid injuries can involve the bones, tendons and/or surrounding tissue in the joint. They are often associated with activities requiring increased pressure on the ball of the foot. In addition, people with high arches are at risk for developing sesamoid problems."
        },
        {
          "name": "Calcaneal Apophysitis (Sever's Disease)",
          "link": "https://docs.google.com/document/d/1k5b4g_rvfEbzfz2LwjrjIu6s9Tak_dtI09XKznjNqco/edit?usp=sharing",
          "description": "It typically affects children between the ages of 8 and 14 years old, because the heel bone (calcaneus) is not fully developed until at least age 14. When there is too much repetitive stress on the growth plate, inflammation can develop."
        },
        {
          "name": "Tailor's Bunion",
          "link": "https://docs.google.com/document/d/18LjyX7fJlYIs_5_zuZ2n4MfjTS4-PG6hSOAZVKNbHkY/edit?usp=sharing",
          "description": "Tailor’s bunion, also called a bunionette, is a prominence of the fifth metatarsal bone at the base of the little toe. The metatarsals are the five long bones of the foot."
        },
        {
          "name": "Vitamin D Deficiency",
          "link": "https://docs.google.com/document/d/1zbWMjrXHDXju-LgTc8sFNorQhY7yng_4G-aippvA5Cs/edit?usp=sharing",
          "description": "In the foot and ankle, stress fractures of the metatarsal bones and ankle may be seen in those with vitamin D deficiency, as well as generalized foot pain."
        },
        {
          "name": "Plantar Wart (Verruca Plantaris)",
          "link": "https://docs.google.com/document/d/1mQnYdV4WUNJBwpo1QdFMe4-lwkAl4gOSRC8iiKqLRtU/edit?usp=sharing",
          "description": "A wart is a small growth on the skin that develops when the skin is infected by a virus. Warts can develop anywhere on the foot, but they typically appear on the bottom (plantar side) of the foot. Plantar warts most commonly occur in children, adolescents and the elderly."
        }
      ]
    }
  }

  render() {
    return (
      <div className="treatments">
        <Hero
          heroCard={this.state.data.heroCard}
          title={this.state.data.title}
          content={this.state.data.content}
        />
        <div className="section treatment-grid">
          {
            this.state.data.conditions.map(({name, description, link}) => (
              <a className="treatment-card" key={name} href={link} target="_blank">
                <span className="title-sm treatment-card-title">{name}</span>
                {
                  description ?
                  <p className="treatment-card-description">{description}</p>
                  :
                  null
                }
                <span className="treatment-card-link">Learn More</span>
              </a>
            ))
          }
        </div>
      </div>
    );
  }
};
