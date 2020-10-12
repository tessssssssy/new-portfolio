import React from "react";
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
    <Navigation />
    <div class="header-container">   
      <div class="heading-container">
        <div class="text-container">
          <h1>Welcome to my website</h1>
          <p>Tessa Fabry - Full Stack Web Developer</p>
          <button>View Work</button>
        </div>
        <div class="left-triangle"></div>
      </div>
      <div class="triangle"></div>
    </div>
    </>
  );
};

export default Header;