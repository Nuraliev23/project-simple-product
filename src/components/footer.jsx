import React from "react";
import "./footer.css"
import face from "../assets/FACEBOOK.png";
import twit from "../assets/TWITTER.png";
import ins from "../assets/INSTAGRAM.png";
import link from "../assets/LINKEDIN.png";
const Realfooter = () => {
  return (
    <div>
      <div className="sec1foot">
        <div className="foot1">
          <h4>Your Company</h4>
          <p>
            Our mission is to make gadjet purchase, accessible and affordable.
          </p>
        </div>
        <div className="foot1">
          <h4>Helpful Links</h4>
          <p>Home</p>
          <p>About us</p>
          <p>Marketplace</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className="foot1">
          <h4>Site Map</h4>
          <p>Our Mobile App</p>
          <p>Frequently Asked Questions</p>
          <p>Help Desk</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="foot1">
          <h4>Contact Usp</h4>
          <div className="footicon">
            <img src={face} alt="" />
            <img src={twit} alt="" />
            <img src={ins} alt="" />
            <img src={link} alt="" />
          </div>
          <p>hello@yourcompany.com</p>
        </div>
      </div>
    </div>
  );
};

export default Realfooter;
