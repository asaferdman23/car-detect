import React from "react";
import "../assets/css/index.css";

function AboutUs() {
  return (
    <div className="about-us-main">
      <h1>About Us</h1>
      <p>This application was mainly authored by Asaf Erdman.</p>
      <a
        href="https://www.linkedin.com/in/asaferdman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="aboutImg"
          src="/imgs/linkedin_crop.jpg"
          alt="Asaf Erdman"
        />
      </a>
    </div>
  );
}

export default AboutUs;
