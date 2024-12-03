import React, { useEffect, useRef } from "react";
import "./about.scss";

import Aos from "aos";
import "aos/dist/aos.css";
import graduateImage from "../../assets/Images/about_img_2.png";
import studentsWorking from "../../assets/Images/about_img_1.png";
import ourstoryImg from "../../assets/Images/our_story_1.png";
import ourstoryImg2 from "../../assets/Images/our_story_2.png";
import ourMissionImg from "../../assets/Images/our_mission_1.png";
import ourMissionImg2 from "../../assets/Images/our_mission_2.png";

import uspImg from "../../assets/Images/usp_1.png";
import uspImg2 from "../../assets/Images/usp_2.png";
import uspImg3 from "../../assets/Images/usp_3.png";
import uspImg4 from "../../assets/Images/usp_4.png";

import partnerImg from "../../assets/Images/partner1.png";
import partnerImg2 from "../../assets/Images/partner2.png";
import partnerImg3 from "../../assets/Images/partner3.png";
import partnerImg4 from "../../assets/Images/partner4.png";
import partnerImg5 from "../../assets/Images/partner5.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="scroll-container">
      <section>
        <div className="about-company" data-aos="fade-in">
          <div className="about-company__text">
            <h2 className="about-company__heading">About The Company</h2>
            <p className="about-company__paragraph">
              At Daltin, we connect students with universities worldwide through
              our innovative all-in-one platform, streamlining the student
              recruiting process. We empower students with educational
              opportunities that enhance their quality of life and promote
              global betterment. By bridging international education providers
              and recruiting partners, we provide students access to diverse
              study options from anywhere in the world, transforming lives
              through education.
            </p>
          </div>
          <div className="about-company__images">
            <img
              src={graduateImage}
              alt="Graduates celebrating"
              className="about-company__image"
            />
            <img
              src={studentsWorking}
              alt="Students working together"
              className="about-company__image about-company__image--overlay"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="our-story-container" data-aos="fade-left">
          <div className="left_column">
            <div className="inner_image_left">
              <img
                src={ourstoryImg}
                alt="2023 Team Story"
                className="story-image"
              />
              <h1>
                202<span>3</span>
              </h1>
            </div>
            <div className="inner_image_right">
              <h2 className="headline">Our Story</h2>
              <img src={ourstoryImg2} alt="Our Story" className="story-image" />
            </div>
          </div>

          <div className="right-column">
            <p>
              Founded in April 2023, Daltin aims to transform education by
              blending global best practices with cutting-edge technology.
              Partnering with over 500 institutions worldwide, we provide
              innovative, tech-driven study options that meet the evolving needs
              of students. Our AI-based portal combines traditional teaching
              with advanced tools, including virtual assistants and chatbots,
              for real-time support, creating a dynamic and interactive learning
              experience. Daltin is pioneering a new era in international
              education.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mission" data-aos="fade-right">
          <div className="mission__text">
            <h2 className="mission__heading">Our Mission & Vision</h2>
            <p className="mission__paragraph">
              We seek to simplify the educational landscape using technology. We
              are empowering students to make more informed decisions about
              their educational paths. Everything is right here, with us, right
              now.
            </p>
          </div>

          <div className="mission__images">
            <img
              src={ourMissionImg}
              alt="Graduates celebrating"
              className="mission__image"
            />
            <img
              src={ourMissionImg2}
              alt="Students working together"
              className="mission__image mission__image--overlay"
            />
          </div>
        </div>
      </section>

      <section >
        <div className="our-usp-container" data-aos="fade-left">
          <div className="grid-container">
            <img src={uspImg} class="grid-item_1" />
            <img src={uspImg2} class="grid-item_2 " />
            <img src={uspImg3} class="grid-item_3" />
            <img src={uspImg4} class="grid-item_4" />
          </div>

          <div className="right-column">
            <h2 className="about-company__heading">Our USPs</h2>
            <h4>Unique selling points encompass:</h4>
            <ul>
              <li>
                Course Finder seamlessly integrated with student information,
                providing an extensive and swift list of available university
                and course selections
              </li>
              <li>
                My Office, a comprehensive CRM tool designed for agents and
                their teams, facilitates access to all documentation, tracks
                employee performance, and offers the flexibility of branch
                integration
              </li>
              <li>
                An intuitive Easy Dashboard featuring scholarships, open
                intakes, application fee waivers, and the ability to explore top
                colleges and universities at a single click.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section >
        <div className="our_partner_container" data-aos="zoom-in">
            <h2 className="our_partner_container__heading">Our Partners</h2>
            <p className="our_partner_container__paragraph">
              Discover the incredible organizations we partner with to bring you
              the best opportunities and resources. Together, we’re creating
              pathways to help you achieve your goals and unlock your potential.
              Meet our trusted partners on the journey to success!
            </p>
        </div>
        <div className="partner_images" data-aos="fade-in">
          <img src={partnerImg} className="common_image" />
          <img src={partnerImg2} className="common_image" />
          <img src={partnerImg3} className="common_image" />
          <img src={partnerImg4} className="common_image" />
          <img src={partnerImg5} className="common_image" />
        </div>
      </section>
    </div>
  );
};

export default About;
