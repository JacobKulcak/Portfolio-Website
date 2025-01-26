import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.jpg";
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} height={200} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>contact me i like to talk to you</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} height={50} alt="" />{" "}
              <p>jkulcak444@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} height={50} alt="" /> <p>3468577733</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} height={50} alt="" /> <p>Dallas, TX</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your email" name="email"/>
            <label htmlFor="Write your message here"></label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
