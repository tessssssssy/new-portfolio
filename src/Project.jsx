import React from 'react';

const Project = (props) => {
    return (
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
    )
}

export default Project;