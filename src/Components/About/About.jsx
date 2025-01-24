import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.jpg";
import profile_img from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} height={200} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} height={200} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              50 Year experience with java and script, willing to work any job
              even nighttime security thank you
            </p>
            <p>
              my passion for working came when i my bank account ran out of
              money and i realized i would like more. i am hard working and will
              work hardly when instructed
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javacript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
