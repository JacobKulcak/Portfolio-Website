import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="https://github.com/jacobkulcak.png" height={200} alt="" />
      <h1>
        <span>I'm Jacob Kulcak,</span> Based sigma male from Dallas, Texas
      </h1>
      <p>More info blah blah blah</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
