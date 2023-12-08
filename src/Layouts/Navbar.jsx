import React, { useEffect, useRef, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
// import * as React from "react";
// import * as ReactDOM from 'react-dom';
import Dropdown from "../Components/Dropdown";
import Logimg from "../Assets/logo.png";
import { FaUserGraduate } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { FaUser } from "react-icons/fa";


const Navbar = () => {

  const [show, setShow] = useState(false);


  const handletoggle = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <nav className="navbar-main">
      <div className="humberger"  onClick={handletoggle}><Hamburger/></div>
      <div className="navbar-logo">
        {/* <div className="nav-title">Pacific Overseas</div> */}
        <img src={Logimg} alt="" className="logo" style={{ objectFit: "contain", width: "8rem", height: "5rem" }} />
      </div>

      <ul className={`navbar-menu ${show ? "toggle":""}`}>
        <Dropdown
          title="Study Abroad"
          sub1="ABOUT US"
          sub2="STUDYING ABROAD"
          sub3="GUIDE FOR PARENTS"
          sub4="HOW TO CHOOSE A COURSE"
          sub5="WHY US "
          sub6="BENEFITS OF STUDYING ABROAD"
          sub7="COST "
          sub8="OUR SERVICES"
          sub9="GUIDE TO STUDY ABROAD"
          sub10="PRE DEPARTURE ASSISTANCE"
          linked="/sucess"
        />
        <Dropdown
          title="Destination"
          sub1="AUSTRALIA"
          sub2="USA"
          sub3="UK"
          sub4="CANADA"
          sub5="NEW ZEALAND"
          sub6="IRELAND"
          sub7="GERMANY"
          linked="/sucess"
        />
        <Dropdown title="About Us" sub1="Work" sub2="Mission" sub3="Award" linked="/sucess" />
        <Dropdown
          title="Test Prep"
          sub1="IELTS"
          sub2="TOEFL(ONLINE)"
          sub3="PTE"
          sub4="SPOKEN ENGLISH"
          sub5="SAT(ONLINE)"
          sub6="DUOLINGO(ONLINE)"
          linked="/sucess"
        />
        <Dropdown title="Blog" />
        <Dropdown title="Contact Us" />
        <Dropdown title="Query" />
        <Dropdown />
      </ul>
      <div className="nav-btn">
        <NavLink to="https://pacific-login.vercel.app" className="contact-btn"><FaUser /></NavLink><span>Login</span>
        <div className="user-btn">
          {/* <NavLink to="/dashboard" className="user-icon" style={{color:"black"}}><FaUserGraduate /></NavLink> */}
          <div className="user-info">
            {/* <Dropdown title="Avik" sub1="Profile" sub2="Dashboard"/> */}
          </div>
          {/* {isDropdownOpen && (
            <div className="user-dropdown" ref={userDropdownRef}>
              <a href="/profile">Profile</a>
              <a href="/dashboard">Dashboard</a>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
