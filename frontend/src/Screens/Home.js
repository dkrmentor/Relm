import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Style/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import displaypic from '../assets/Images/dp.jpg';
import Footer from "../components/common/Footer";

const Home = () => {
  const [title1State, setTitle1State] = useState(false);
  const [title2State, setTitle2State] = useState(false);
  const [title3State, setTitle3State] = useState(false);
  const navigate = useNavigate();

  const handleTitle1Toggle = () => {
    setTitle1State(!title1State);
  };

  const handleTitle2Toggle = () => {
    setTitle2State(!title2State);
  };

  const handleTitle3Toggle = () => {
    setTitle3State(!title3State);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
     <div className="pic-container ">
        <img src={displaypic} alt="displaypic" />
    
          <p className="">Sign in with</p>
          <FontAwesomeIcon icon={faLinkedin}  />
      <FontAwesomeIcon icon={faInstagram}   />
        </div>
      <div className="title-row">
        <div className="title">
          <span>home matching</span>
          <label className="switch">
            <input type="checkbox" checked={title1State} onChange={handleTitle1Toggle} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="title">
          <span>barter marketplace</span>
          <label className="switch">
            <input type="checkbox" checked={title2State} onChange={handleTitle2Toggle} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="title">
          <span>group matching</span>
          <label className="switch">
            <input type="checkbox" checked={title3State} onChange={handleTitle3Toggle} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
<div>

      <div className="navigation-row">
        <button className="navigation" onClick={() => handleNavigation('/interestmatching')}>
        discover like-minded locals
        </button>
      </div>
      <div className="navigation-row">
        <button className="navigation" onClick={() => handleNavigation('/')}>
        value marketplace
        </button>
      </div>
      <div className="navigation-row">
        <button className="navigation" onClick={() => handleNavigation('/travelbucketlist')}>
        travel bucket list
        </button>
      </div>
      <div className="navigation-row">
        <button className="navigation" onClick={() => handleNavigation('/')}>
          Credits / future token
        </button>
      </div>
  
      </div>
      <Footer />
    </div>

  );
};

export default Home;
