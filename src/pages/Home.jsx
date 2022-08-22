import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faUser,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faBootstrap,
  faCss3,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <div className="home bg-dark text-light vh-100 p-5">
        <div className="container" id="home">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div>
              <div classNameName="text-1">Hello, my name is</div>
              <div className="text-2">Jovernie Cano</div>
              <div className="text-3">
                And I'm a
                <span className="text-danger">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Full-Stack Developer",
                        "Designer",
                        "Freelancer",
                      ],
                    }}
                  />
                </span>
              </div>
              <Link to="/Login">
                <button className="btn btn-danger btn-lg my-4">Hire Me</button>
              </Link>
            </div>
            <div>
              <img
                className="img-fluid d-none d-md-block my-5"
                src={"img1.png"}
                alt="my pic1"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="text-bg-light p-5">
        <div className="container" id="about">
          <div className="title text-center py-4">
            <h2 className="position-relative d-inline-block">About Me</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="rounded img-fluid"
                src={"img2.jpg"}
                alt="my pic2"
              />
            </div>
            <div className="col-lg-6">
              <h2>
                I'm Jovernie and I'm a
                <span className="text-danger">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Full-Stack Developer",
                        "Designer",
                        "Freelancer",
                      ],
                    }}
                  />
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A in
                culpa repellendus odit rem ipsa, vero illum magnam aut
                laudantium nulla commodi dolores debitis incidunt aperiam beatae
                reprehenderit voluptas iusto laboriosam cupiditate.
                Necessitatibus repudiandae voluptatem harum fugit quam animi
                iure temporibus? Neque nesciunt hic dolorem quam iusto. Iste
                deleniti porro, quia repellendus pariatur corrupti unde. In non
                eos similique excepturi!
              </p>
              <a
                href={
                  "https://drive.google.com/file/d/1PeuXO8voMNOsC1zjCRFfDjJx361K2bRF/view?usp=sharing"
                }
                target="_blank"
              >
                <button className="btn btn-danger btn-lg my-4">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-bg-dark p-5">
        <div className="container" id="services">
          <div className="title text-center py-4">
            <h2 className="position-relative d-inline-block">My Services</h2>
          </div>
          <div className="d-md-flex justify-content-center align-items-center">
            <div className="card mx-4">
              <div
                className="card-body text-bg-dark"
                style={{ width: "18rem" }}
              >
                <FontAwesomeIcon icon={faCode} id="icon"></FontAwesomeIcon>
                <h5 className="card-title">Full Stack Developer</h5>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in browser.
                </p>
                <h6 className="card-subtitle mb-2 text-muted">
                  Dev Tools and Languages
                </h6>
                <p className="card-text">HTML, CSS, JavaScript, Bootstrap</p>
              </div>
            </div>
            <div className="card mx-4">
              <div
                className="card-body text-bg-dark"
                style={{ width: "18rem" }}
              >
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  id="icon"
                ></FontAwesomeIcon>
                <h5 className="card-title">Designer</h5>
                <p>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <h6 className="card-subtitle mb-2 text-muted">Design Tools</h6>
                <p className="card-text">Pen and Paper, Figma, and Canva.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills p-5" id="skills">
        <div className="container">
          <div className="title text-center py-4">
            <h2 className="position-relative d-inline-block">My Skills</h2>
          </div>

          <div className="skills-content d-sm-flex justify-content-between row">
            <div className="col-lg-6">
              <div className="fw-bold">My Skills, Learning Path and Goals</div>
              <p className="text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate commodi deserunt eligendi facilis doloremque
                doloribus voluptate repellat dignissimos temporibus perspiciatis
                nobis, maxime fuga amet rerum eveniet, totam ab! Repellat sequi
                odit omnis dolores distinctio debitis recusandae quaerat.
                Architecto obcaecati nam enim officiis necessitatibus omnis
                dignissimos alias iure. Iusto praesentium aperiam eveniet
                numquam nihil amet vel nulla officia, nemo maiores porro.
              </p>
              <Link to="/Project">
                <button className="btn btn-danger btn-lg my-1">
                  Read More
                </button>
              </Link>
            </div>
            <div className="col-lg-6 d-flex-wrap">
              <div>
                <div classNameName="py-1">
                  <FontAwesomeIcon icon={faHtml5} id="icon"></FontAwesomeIcon>
                  <span classNameName="fw-bold fs-3">HTML</span>
                </div>
                <div classNameName="py-1">
                  <FontAwesomeIcon icon={faCss3} id="icon"></FontAwesomeIcon>
                  <span classNameName="fw-bold fs-3">CSS</span>
                </div>
                <div classNameName="py-1">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    id="icon"
                  ></FontAwesomeIcon>
                  <span classNameName="fw-bold fs-3">BootStrap</span>
                </div>
                <div classNameName="py-1">
                  <FontAwesomeIcon icon={faReact} id="icon"></FontAwesomeIcon>
                  <span classNameName="fw-bold fs-3">React</span>
                </div>
                <div classNameName="py-1">
                  <FontAwesomeIcon icon={faJava} id="icon"></FontAwesomeIcon>
                  <span classNameName="fw-bold fs-3">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-bg-dark p-5">
        <div className="container" id="contact">
          <div className="title text-center py-4">
            <h2 className="position-relative d-inline-block">Contact</h2>
          </div>
          <div className="contact d-sm-flex row">
            <div className="col-lg-6">
              <h3>Get in Touch</h3>
              <p>I would really like to hear from you. See my details below.</p>
              <div className="d-flex align-items-center px-3 py-3">
                <FontAwesomeIcon icon={faUser} id="icon2"></FontAwesomeIcon>
                <div className="px-3">
                  <div className="fw-bold">Name</div>
                  <div>Jovernie Cano</div>
                </div>
              </div>
              <div className="d-flex align-items-center px-3 py-3">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  id="icon2"
                ></FontAwesomeIcon>
                <div className="px-3">
                  <div className="fw-bold">Address</div>
                  <div>Quezon City, Philippines</div>
                </div>
              </div>
              <div className="d-flex align-items-center px-3 py-3">
                <FontAwesomeIcon icon={faEnvelope} id="icon2"></FontAwesomeIcon>
                <div className="px-3">
                  <div className="fw-bold">Email</div>
                  <div>jovcano28@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3>Message Me</h3>
              <form action="#" className="d-flex-wrap py-3">
                <div>
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email my-3">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea my-3">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe project..."
                    required
                  ></textarea>
                </div>
                <button className="btn btn-danger btn-lg">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>
          Created by <a href={"#home"}>Jovernie</a> |
          <span className="far fa-copyright"></span> 2022 All rights reserved.
        </span>
      </footer>
    </div>
  );
}
