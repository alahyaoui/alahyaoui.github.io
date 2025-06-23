import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/introduction.css'
import homePageImage from './assets/img/home_page.jpeg';
import Chip from '@mui/material/Chip';

function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="introduction" id="about">
      <div className="introduction__container">
        <h1 className="introduction__title">{t('introduction.title')}</h1>
        <div className="introduction__content">
          <div className="introduction__bio">
            <h2 className="introduction__subtitle">{t('introduction.subtitle')}</h2>
            <p className="introduction__text introduction__text--long">
              {t('introduction.description.long')}
            </p>
            <p className="introduction__text introduction__text--short">
              {t('introduction.description.short')}
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
              alt="Ayoub Lahyaoui's profile"
              className="introduction__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;