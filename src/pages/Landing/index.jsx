import React from "react";
import "./Landing.scss";
import About from "../../assets/Images/about.png";
import Story from "../../assets/Images/book.png";
import Mission from "../../assets/Images/target.png";
import USP from "../../assets/Images/usp.png";
import Partner from "../../assets/Images/group.png";

const Landing = () => {
  return (
      <div className="timeline">
        <div className="container left-container">
          <img src={About} alt="about" />
          <div className="text-box">
            <h2>About The Company</h2>
            <p>
              At Daltin, we connect students with universities worldwide through
              our innovative all-in-one platform, streamlining the student
              recruiting process. We empower students with educational
              opportunities that enhance their quality of life and promote
              global betterment. By bridging international education providers
              and recruiting partners, we provide students access to diverse
              study options from anywhere in the world, transforming lives
              through education.
            </p>

          <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={Story} alt="about" />
          <div className="text-box">
            <h2>Our Story</h2>
            <small>2023</small>
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

          <span className="right-container-arrow"></span>

          </div>
        </div>

        <div className="container left-container">
          <img src={Mission} alt="about" />
          <div className="text-box">
            <h2>Our Mission & Vision</h2>
            <p>
              We seek to simplify the educational landscape using technology. We
              are empowering students to make more informed decisions about
              their educational paths. Everything is right here, with us, right
              now.
            </p>
          <span className="left-container-arrow"></span>

          </div>
        </div>

        <div className="container right-container">
          <img src={USP} alt="about" />
          <div className="text-box">
            <h2>Our USPs</h2>
            <small>Unique selling points encompass:</small>
            <ul>
              <li>
                Course Finder seamlessly integrated with student information,
                providing an extensive and swift list of available university
                and course selections.
              </li>
              <li>
                My Office, a comprehensive CRM tool designed for agents and
                their teams, facilitates access to all documentation, tracks
                employee performance, and offers the flexibility of branch
                integration.
              </li>
              <li>
                An intuitive Easy Dashboard featuring scholarships, open
                intakes, application fee waivers, and the ability to explore top
                colleges and universities at a single click.
              </li>
            </ul>

          <span className="right-container-arrow"></span>

          </div>
        </div>

        <div className="container left-container">
          <img src={Partner} alt="about" />
          <div className="text-box">
            <h2>Our Partners</h2>
            <p>
              Discover the incredible organizations we partner with to bring you
              the best opportunities and resources. Together, we’re creating
              pathways to help you achieve your goals and unlock your potential.
              Meet our trusted partners on the journey to success!
            </p>
          <span className="left-container-arrow"></span>

          </div>
        </div>
      </div>
  );
};

export default Landing;
