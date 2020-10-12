import React from "react";

const Portfolio = () => {
    const projects = [
        { 
            title: 'Hidden Gems',
            description: '',
            images: ["hidden_gems1.png", "hidden_gems2.png"]
        },
        { 
            title: 'BikeFinder',
            description: '',
            images: ["bikefinder_1.png", "bikefinder_2.png"]
        }
    ]
  return (
    <div class="portfolio">
      <div class="subheading-container">
        <div class="section-title">
          <div class="circle circle-left"></div>
          <h1>Portfolio</h1>
          <div class="circle circle-right"></div>
        </div>
      </div>
      <div class="portfolio-main">
        <div class="project">
          <div class="border"></div>
          <div class="project-info">
            <h3>Hidden Gems</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              deserunt possimus aspernatur deleniti, minus, consequatur odio
              sint reprehenderit asperiores quidem necessitatibus rerum sapiente
              quod, sit repudiandae repellendus similique! Temporibus dolores
              totam debitis quia,{" "}
            </p>
            <button>Github</button>
          </div>

          <div class="project-image-container">
            <div class="image-container">
              <img class="project-image" src="hidden_gems1.png" />
              <div class="image-shadow"></div>
            </div>

            <div class="image-container">
              <img class="project-image" src="hidden_gems2.png" />
              <div class="image-shadow"></div>
            </div>
          </div>
        </div>

        <div class="triangle-container">
          <div class="left-triangle left-triangle-lavender"></div>
          <div class="triangle"></div>
        </div>

        <div class="project project-two">
          <div class="border border-right"></div>
          <div class="project-info">
            <h3>BikeFinder</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              deserunt possimus aspernatur deleniti, minus, consequatur odio
              sint reprehenderit asperiores quidem necessitatibus rerum sapiente
              quod, sit repudiandae repellendus similique! Temporibus dolores
              totam debitis quia,{" "}
            </p>
            <button>Github</button>
          </div>

          <div class="project-image-container">
            <div class="image-container">
              <img class="project-image" src="bikefinder_1.png" />
              <div class="image-shadow"></div>
            </div>

            <div class="image-container">
              <img class="project-image" src="bikefinder_2.png" />
              <div class="image-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
