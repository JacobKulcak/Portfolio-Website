import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import underline from '../../assets/nav_underline.png'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} height={100} alt="" />
      <ul className="nav-menu">
        <li>
          <p onClick={()=>setMenu("home")}>Home</p>
          {menu === "home" ? (
            <img src={underline} height={30} width={50} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={()=>setMenu("about")}>About Me</p>
          {menu === "about" ? (
            <img src={underline} height={30} width={50} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={()=>setMenu("services")}>Services</p>
          {menu === "services" ? (
            <img src={underline} height={30} width={50} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={()=>setMenu("work")}>Portfolio</p>
          {menu === "work" ? (
            <img src={underline} height={30} width={50} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={()=>setMenu("contact")}>Contact</p>
          {menu === "contact" ? (
            <img src={underline} height={30} width={50} alt="" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
