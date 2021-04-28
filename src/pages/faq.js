import React from "react"
import { Accordion, Card } from "react-bootstrap"

import Footer from "../components/footer"
import HomeNavbar from "../components/HomeNavbar"

import "../css/faq.css"

const faq = () => {
  return (
    <>
      <HomeNavbar />
      <div>
        <Accordion>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="0"
            className="toggle-txt"
          >
            My plant is sick, what’s wrong with it?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                There can be a myriad of reasons for a plant to show signs of
                sickness. You can have nutrient deficiencies, nutrient
                over-abundance(toxicity), pest problems, over-watering,
                under-watering, pH issues, and/or poor environment control to
                name just a few.
              </p>

              <p>
                People growing in hydroponics tend to deal with pH issues more
                than any of the others mentioned.
              </p>

              <p>
                People growing in soil or coco tend to see more pests, and
                overwatering is commonly a problem for new excited growers.
              </p>

              <p>
                However, growers in all groups tend to have the same frustrating
                problem: pH issues that show themselves as nutrient
                deficiencies. Many growers – old and new alike – at some point
                will find markings or defects on some of their leaves. Many
                times, it looks as if your plant needs more of a specific
                nutrient like as calcium or phosphorus. And so many of those
                times, the real problem is that the pH is in a range that
                doesn’t allow the plant to uptake that specific nutrient even if
                there’s a lot of it.
              </p>

              <p>
                <strong style={{ textDecoration: "underline" }}>
                  Short Answer:{" "}
                </strong>
                If you’re having a problem with a nutrient deficiency, check
                your pH levels before making adjustments to how you feed your
                plants. If you’re having any other problem, check out the link
                below for help!
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="1"
            className="toggle-txt"
          >
            Why do I have to pH my plants nutrients?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                The answer for this one actually ties into the last point. Your
                plants need a variety of nutrients, just like people do. Even if
                you give your plants all the nutrients they need, they will only
                be able to uptake nutrients if their pH is at the right level.
                To state that a different way: pH is what determines – amongst
                other things – which nutrients your plant will be able to
                uptake.
              </p>
              <p>
                For example: Pretty much all cannabis plants need magnesium. If
                you grow hydroponically, your plants can easily uptake magnesium
                at a pH level of about 5.5-6.5. If your pH is at 4.0, your
                plants wouldn’t uptake magnesium and thus give you the
                impression that it needs more magnesium. In this case, your
                plant roots are surrounded by magnesium, but can’t uptake it due
                to the pH levels.
              </p>
              <p>
                <strong style={{ textDecoration: "underline" }}>
                  Short Answer:{" "}
                </strong>
                Having proper pH levels will make it so your plant can uptake
                the nutrients it needs at any given time. If you don’t manage
                your pH, your plant will show you how hard it can be to take
                care of.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="2"
            className="toggle-txt"
          >
            Where can I buy marijuana seeds?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                Boy oh boy do we get this question a lot…but it’s totally
                understandable! You can be stealthy about everything you do
                whilst growing, but many people feel like the act of getting
                seeds is the least secure part of their grow.
              </p>
              <p>
                Many growers choose to start their first grow with seeds they
                find in their buds (bagseed). This can be a convenient way to
                test out your growing skills with little investment, but
                sometimes you get unexpected results as you often don’t know
                very much, if anything, about the strain or how the plant is
                going to grow. I’ve grown bagseed that was out of this world,
                and I’ve also grown bagseed that produced tall, spindly plants
                with low yields and weak buds. It’s all part of the bagseed
                lottery.
              </p>
              <p>
                If you happen to know another grower or live near a medical
                marijuana dispensary, it’s sometimes possible to get seeds or
                clones from them. Several dispensaries and collectives will
                offer free or cheap clones/seeds to medical marijuana patients.
                If this option is available to you, you’ll probably be able to
                choose your strain and talk to the breeder about how the plant
                grows. That way you’ll have a better idea of what to expect.
              </p>
              <p>
                Several trusted companies have been delivering seeds to
                customers for many years, and many more will start to do the
                same as marijuana becomes more and more mainstream. If you need
                to find a specific strain for your needs, or desire a strain
                that grows a certain way (for example if you have a small grow
                space and need a strain that grows short/bushy), you will
                probably want to look into ordering seeds directly from a
                breeder or online seed bank. Almost every grow I’ve ever done
                has been started with feminized seeds from a trusted seedbank,
                and I will continue to do for the foreseeable future even though
                I can produce my own seeds.{" "}
              </p>

              <p>
                <strong>
                  If you need direct links to trusted online seedbanks,{" "}
                  <a
                    href="https://discord.gg/VR2RrBr7mF"
                    className="faq-links"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    join our discord!
                  </a>
                </strong>
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="3"
            className="toggle-txt"
          >
            Do I Test the pH of My Fertilizer Before or After Adding My
            Nutrients?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                Always measure the pH after you add any nutrients or amendments
                as they will change the pH value of your water. After you mix
                your nutrient solution, use a pH meter or drops to test its pH
                level.
              </p>
              <p>
                If you are growing hydroponically, test a sample from your water
                reservoir a few minutes after you add your nutrients.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="4"
            className="toggle-txt"
          >
            Do I Need to Measure the pH of My Runoff After Feeding My Plants?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                Yes. Always remember to test the pH of your nutrient runoff as
                this will give you an idea of the pH of your medium.
              </p>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey="5"
            className="toggle-txt"
          >
            How Exact Do I Need to Get My pH Levels When Growing Cannabis?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>
                Don’t get flustered if your nutrients are slightly below or
                above the optimal conditions we mentioned above. Only react to
                big changes in pH that may inhibit your plant’s ability to
                uptake nutrients.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
        <h6 className="my-5 text-center">More FAQ's coming soon!</h6>
      </div>
      <Footer />
    </>
  )
}

export default faq
