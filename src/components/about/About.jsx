import React from "react";
import "./style/about.css"
import aboutImage from './assets/img/about_page.jpeg';
import { getAge } from '../../utils'

const MY_BIRTH_DATE = "2001-05-21"

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img
            className="about__image"
            src={aboutImage}
            alt="Ayoub Lahyaoui's profile picture"
          />
        </div>
        <div className="about__content">
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            Hello, I'm Ayoub Lahyaoui a {getAge(MY_BIRTH_DATE)}-year-old Belgian software developer.<br />
            I enjoy socializing, meeting new people, and learning about different cultures, which leads me to enjoy traveling.<br />
            I have been fortunate to visit a few countries and hope to visit more in the future.<br />
            As a computer and technology enthusiast, I've developed a wide range of skills in a variety of computer-related fields, making me a highly adaptable individual. <br />
            I strive to make use of all of my abilities but also to acquire new ones in order to help me complete my work as efficiently as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;