import React from "react";
import { useTranslation } from 'react-i18next';
import "./style/about.css"
import aboutImage from './assets/img/about_page.webp';
import { PROFILE } from '../../constants';
import { getAge } from '../../utils'

function About() {
  const { t } = useTranslation();


  return (
    <section className="about" id="about">
      <div className="about__container">
      <div className="about__image-wrapper">
      <img
            className="about__image"
            src={aboutImage}
            alt={PROFILE.PROFILE_ALT}
          />
        </div>
        <div className="about__content">
          <h2 className="about__title">{t('about.title')}</h2>
          <p className="about__text">
            {t('about.description', { age: getAge(PROFILE.BIRTH_DATE) })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;