import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/PutYourVehicleForRent";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Easy booking by just providing a college ID card
                </h2>

                <p className="section__description">
                This feature allows college students to easily rent a bike or scooty without the hassle of providing a driver's license or other forms of identification.
With this feature, college students can simply provide their college ID card and a few other personal details, such as their name and contact information, to quickly book a bike or scooty rental online. This eliminates the need for students to go through the process of obtaining a driver's license, which can be time-consuming and costly.
                </p>

                <p className="section__description">
                This feature is especially beneficial for students who need to travel short distances within the city or campus. It is an affordable and convenient mode of transportation that saves time and money. Additionally, this feature allows students to easily access the rental services without having to worry about the complex documentation process.
Overall, the easy booking feature with college ID cards simplifies the rental process for students and makes it more accessible to them. It is a great addition to online bike and scooty rental websites that cater to college students who need to travel short distances quickly and efficiently.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>918317054041</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
