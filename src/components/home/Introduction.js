import React from 'react';
import './style/introduction.css'
import home_page from './assets/img/home_page.jpeg';
import Chip from '@mui/material/Chip';

function Introduction() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hey, I'm Ayoub</h1>
          <p>I am a Belgian third-year Computer Science student completing an end-of-study internship at TomTom.
            I am currently looking for an entry-level position in Software Development starting in January 2023.

            I'm always eager to learn and have a strong sense of curiosity, which is why I’m constantly trying to keep up with new computer technologies.
          </p>
          <p>If I am not coding, you can find me: </p>
          <div className='flex-chips'>
            <Chip className="zoom" variant="outlined" label="👨‍🎓 learning" />
            <Chip className="zoom" variant="outlined" label="👨‍👩‍👧‍👧 socializing" />
            <Chip className="zoom" variant="outlined" label="🛫 traveling" />
            <Chip className="zoom" variant="outlined" label="🖥 building and tweaking computers" />
            <Chip className="zoom" variant="outlined" label="📰 following tech news" />
            <Chip className="zoom" variant="outlined" label="🤟 hanging out with friends" />
          </div>
        </div>
        <div className="image-wrapper">
          <img src={home_page} alt="profile_picture" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;