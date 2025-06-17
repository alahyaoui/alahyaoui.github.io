import React from 'react';
import './style/introduction.css'
import homePageImage from './assets/img/home_page.jpeg';
import Chip from '@mui/material/Chip';

function Introduction() {
  return (
    <section className="introduction" id="about">
      <div className="introduction__container">
        <div className="introduction__content">
          <h1 className="introduction__title">Hey, I'm Ayoub</h1>
          <p className="introduction__text">
            I am a Belgian third-year Computer Science student completing an end-of-study internship at TomTom.
            I am currently looking for an entry-level position in Software Development starting in January 2023.

            I'm always eager to learn and have a strong sense of curiosity, which is why I'm constantly trying to keep up with new computer technologies.
          </p>
          <p className="introduction__text">If I am not coding, you can find me: </p>
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
    </section>
  );
}

export default Introduction;