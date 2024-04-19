// About.jsx

import React from 'react';
import './About.css';
import profilePicture from '../images/profile.jpg'; 

const About = () => {
  return (
    <div className='about-container'>
      <div className='about'>
        <h1 className='about-title'>Welcome to ComSept</h1>
        <p className='about-description'>
          ComSept is a versatile text manipulation tool designed to streamline your text formatting tasks. Whether you need to tidy up messy text, enhance readability, or prepare content for further processing, ComSept has got you covered.
        </p>
        <ul className='about-features'>
          <li>Remove extra spaces and line breaks from text.</li>
          <li>Add line breaks to text for improved readability.</li>
          <li>Insert commas into text effortlessly.</li>
          <li>Enhance text clarity by adding dashes where needed.</li>
        </ul>
        <p className='about-benefit'>
          Say goodbye to tedious manual text formatting tasks and hello to efficiency with ComSept!
        </p>
      </div>
      <div className='about'>
       
        <div className='about-me-details'>
          <h1 className='about-me-title'>Who made this?</h1>
          <img className='profile-picture' src={profilePicture} alt='Profile' />
          <h2 className='about-me-name'>Hemanth Kumar</h2>
          <p className='about-me-description'>
            As a full stack developer, I'm passionate about leveraging technology to create meaningful solutions that simplify tasks and enhance productivity. With a keen eye for detail and a dedication to continuous learning, I strive to deliver high-quality software products that make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
