import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.jpg'
import user_icon from "../../assets/user_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} height={200} alt="" />
          <p>
            I am a manly man with much experience in video editing and music
            video acting
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} height={20} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">copyright 2025 Bob Manlyman. All right are his</p>
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer