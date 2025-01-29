import React, {Component} from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ParticlesComponent from "./Components/Particles/Particles";

const App = () => {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
