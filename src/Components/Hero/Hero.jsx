import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="https://github.com/jacobkulcak.png" height={200} alt="" />
      <h1>
        <span>I'm Jacob Kulcak,</span> Based sigma male from Dallas, Texas
      </h1>
      <p>More info blah blah blah</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
