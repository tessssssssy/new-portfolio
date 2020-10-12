import React from 'react';

const About = () => {
    return (
    <div class="about">
        <div class="subheading-container">
          <div class="section-title">
          <div class="circle circle-left"></div>
            <h1>About Me</h1>
          <div class="circle circle-right"></div>
          </div>
        </div>

        <div class="about-content">
          <div class="image-container">
            <img src="profile_photo.jpg" class="profile-image" />
            <div class="profile-image-shadow"></div>
          </div>
            <div class="bio">
             <div class="border-bio"></div>
              <p class="bio-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                deserunt possimus aspernatur deleniti, minus, consequatur odio
                sint reprehenderit asperiores quidem necessitatibus rerum sapiente
                quod, sit repudiandae repellendus similique! Temporibus dolores
                totam debitis quia, aperiam fuga dolor magni asperiores commodi
                magnam explicabo, maxime necessitatibus. Autem, optio et facere
                itaque consectetur commodi!
              </p>
            </div>
        </div>
  
        <div class="skills-container">
          <h3>Skills</h3>
          <div class="skills-container-content">
            <div class="skill">
              <i class="fab fa-html5"></i>
              <p>HTML</p>
            </div>
            <div class="skill">
              <i class="fab fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>Javascript</p>
            </div>
            <div class="skill">
              <img src="https://img.icons8.com/ios/50/000000/ruby-programming-language.png"alt="ruby logo"/>
              <p>Ruby</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>Ruby on Rails</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>React js</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>Node js</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>Express js</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>Postgresql</p>
            </div>
            <div class="skill">
              <i class="fab fa-js-square"></i>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default About;