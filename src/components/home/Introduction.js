import React from 'react';
import './style/introduction.css'
import homePageImage from './assets/img/home_page.jpeg';
import Chip from '@mui/material/Chip';

function Introduction() {
  return (
    <section className="introduction" id="about">
      <div className="introduction__container">
      <h1 className="introduction__title">About me</h1>
      <div className="introduction__content">
        <div className="introduction__bio">
          <h2 className="introduction__subtitle">Hey, I'm Ayoub!</h2>
          <p className="introduction__text introduction__text--desktop">
            I am a Belgian third-year Computer Science student completing an end-of-study internship at TomTom. With a passion for software development and a keen eye for detail, I thrive in dynamic environments where I can apply my technical skills and problem-solving abilities.

            My journey in computer science has equipped me with a solid foundation in various programming languages and frameworks, while my internship at TomTom has given me valuable real-world experience in developing scalable solutions. I'm particularly interested in full-stack development and cloud technologies.

            I'm currently seeking an entry-level position in Software Development starting in January 2023, where I can contribute to meaningful projects and continue growing as a developer. I'm looking for a role that offers mentorship opportunities and the chance to work with cutting-edge technologies.

            Beyond my technical skills, I bring a collaborative spirit and strong communication abilities to any team. I'm always eager to learn and have a strong sense of curiosity, which drives me to stay current with emerging technologies and industry trends. I believe in writing clean, maintainable code and following best practices in software development.
          </p>
          <p className="introduction__text introduction__text--mobile">
            I am a Belgian third-year Computer Science student completing an end-of-study internship at TomTom.
            I am currently looking for an entry-level position in Software Development starting in January 2023.

            I'm always eager to learn and have a strong sense of curiosity, which is why I'm constantly trying to keep up with new computer technologies.
          </p>
        </div>
        <div className="introduction__hobbies">
        <h2 className="introduction__subtitle">My hobbies</h2>
          <div className="introduction__chips">
            <Chip className="introduction__chip" variant="outlined" label="👨‍🎓 learning" />
            <Chip className="introduction__chip" variant="outlined" label="👨‍👩‍👧‍👧 socializing" />
            <Chip className="introduction__chip" variant="outlined" label="🛫 traveling" />
            <Chip className="introduction__chip" variant="outlined" label="🖥 building and tweaking computers" />
            <Chip className="introduction__chip" variant="outlined" label="📰 following tech news" />
            <Chip className="introduction__chip" variant="outlined" label="🤟 hanging out with friends" />
          </div>
        </div>
        <div className="introduction__image-wrapper">
          <img
            src={homePageImage}
            alt="Ayoub Lahyaoui's profile picture"
            className="introduction__image"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;