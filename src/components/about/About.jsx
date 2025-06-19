import React from "react";
import { useTranslation } from 'react-i18next';
import "./style/about.css"
import aboutImage from './assets/img/about_page.jpeg';
import { getAge } from '../../utils'

const MY_BIRTH_DATE = "2001-05-21"

function About() {
  const { t } = useTranslation();
  const age = getAge(MY_BIRTH_DATE);

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
          <h2 className="about__title">{t('about.title')}</h2>
          <p className="about__text">
            {t('about.description', { age })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;