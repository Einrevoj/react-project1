import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="title text-center py-5">
            <h2 class="position-relative d-inline-block">Sample Project</h2>
          </div>

          <div class="row">
            <div class="col-sm-12 col-lg-6 p-2">
              <div class="position-relative overflow-hidden">
                <img
                  src={"project1.jpg"}
                  alt="E-commerce Website"
                  class="w-100"
                />
              </div>
              <div class="text-center">
                <p class="text-capitalize mt-3 mb-1">
                  Responsive E-commerce Website
                </p>
                <a
                  href="https://einrevoj.github.io/ultra-emart/"
                  target="_blank"
                  class="btn btn-primary mt-3"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  GitHub
                </a>
              </div>
            </div>

            <div class="col-sm-12 col-lg-6 p-2">
              <div class="position-relative overflow-hidden">
                <img src={"project2.jpg"} alt="calculator" class="w-100" />
              </div>
              <div class="text-center">
                <p class="text-capitalize mt-3 mb-1">Functional Calculator</p>
                <a
                  href="https://calculator-with-react-beta.vercel.app/"
                  target="_blank"
                  class="btn btn-primary mt-3"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>
          Created by <a href={"#home"}>Jovernie</a> |
          <span class="far fa-copyright"></span> 2022 All rights reserved.
        </span>
      </footer>
    </div>
  );
}
