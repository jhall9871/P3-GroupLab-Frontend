import React from "react";

import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div id="landing-wrapper">
      <div id="landing-links">
        
          <Link to="/signup"><div className="call-to-action"><h3>Sign Up</h3></div></Link>
          <Link to="/login"><div className="call-to-action"><h3>Log In</h3></div></Link>
        
      </div>
      <div className="secondary-circle"></div>
      {/* <Link to="/about">
        <div className="title-circle">
          <div className="music-note">
            <h1>FORTE</h1>
          </div>
        </div>
      </Link> */}
      <div className="bottom-wrapper">
        <div className="bottom-title">MUSIC LESSONS FOR EVERYONE</div>
        <div className="right-top"></div>
        <div className="bottom-subtitle">FROM ANYWHERE</div>
        <div className="right-bottom"></div>
      </div>
    </div>
  );
};

export default Landing;
