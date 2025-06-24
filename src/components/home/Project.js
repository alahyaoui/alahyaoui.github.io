import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/project.css';
import tomtomAmigoImage from './assets/img/tomtom_amigo.webp';
import escooterFinderImage from './assets/img/escooter_finder.webp';
import rainbowAttackImage from './assets/img/rainbow-attack.webp';
import curriculumSimulatorImage from './assets/img/curriculum-simulator.webp';
import stibRideImage from './assets/img/stibride.webp';
import esiReadingImage from './assets/img/esi_reading.webp';
import abaloneImage from './assets/img/abalone.webp';
import game2048Image from './assets/img/2048.webp';
import FadeInSection from '../fade/FadeInSections';
import { PROJECT_LINKS } from '../../constants';

function Project() {
  const { t } = useTranslation();

  return (
    <section className="projects" id="project">
      <FadeInSection>
        <div className="projects__container">
          <h2 className="projects__title">{t('projects.title')}</h2>
          <div className="projects__grid">
            <article className="projects__item">
              <a href={PROJECT_LINKS.TOMTOM_AMIGO} target="_blank" rel="noreferrer" className="projects__link">
                <img src={tomtomAmigoImage} className="projects__image" alt="TomTom AmiGO app screenshot" />
                <h3 className="projects__subtitle">{t('projects.tomtomAmigo.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.tomtomAmigo.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.tomtomAmigo.techStack')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.ESCOOTER_FINDER} target="_blank" rel="noreferrer" className="projects__link">
                <img src={escooterFinderImage} className="projects__image" alt="E-Scooter Finder app screenshot" />
                <h3 className="projects__subtitle">{t('projects.escooterFinder.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.escooterFinder.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.escooterFinder.frontend')}</p>
                <p className="projects__tech-stack">{t('projects.escooterFinder.backend')}</p>
                <p className="projects__tech-stack">{t('projects.escooterFinder.patterns')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.CURRICULUM_SIMULATOR} target="_blank" rel="noreferrer" className="projects__link">
                <img src={curriculumSimulatorImage} className="projects__image" alt="Curriculum Simulator app screenshot" />
                <h3 className="projects__subtitle">{t('projects.curriculumSimulator.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.curriculumSimulator.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.curriculumSimulator.techStack')}</p>
                <p className="projects__tech-stack">{t('projects.curriculumSimulator.patterns')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.STIB_RIDE} target="_blank" rel="noreferrer" className="projects__link">
                <img src={stibRideImage} className="projects__image" alt="Stib Ride app screenshot" />
                <h3 className="projects__subtitle">{t('projects.stibRide.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.stibRide.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.stibRide.techStack')}</p>
                <p className="projects__tech-stack">{t('projects.stibRide.patterns')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.RAINBOW_ATTACK} target="_blank" rel="noreferrer" className="projects__link">
                <img src={rainbowAttackImage} className="projects__image" alt="Rainbow Attack app screenshot" />
                <h3 className="projects__subtitle">{t('projects.rainbowAttack.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.rainbowAttack.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.rainbowAttack.techStack')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.ESI_READING} target="_blank" rel="noreferrer" className="projects__link">
                <img src={esiReadingImage} className="projects__image" alt="Reading Esi app screenshot" />
                <h3 className="projects__subtitle">{t('projects.readingEsi.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.readingEsi.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.readingEsi.techStack')}</p>
                <p className="projects__tech-stack">{t('projects.readingEsi.patterns')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.ABALONE} target="_blank" rel="noreferrer" className="projects__link">
                <img src={abaloneImage} className="projects__image" alt="Abalone game screenshot" />
                <h3 className="projects__subtitle">{t('projects.abalone.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.abalone.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.abalone.techStack')}</p>
                <p className="projects__tech-stack">{t('projects.abalone.patterns')}</p>
              </div>
            </article>

            <article className="projects__item">
              <a href={PROJECT_LINKS.GAME_2048} target="_blank" rel="noreferrer" className="projects__link">
                <img src={game2048Image} className="projects__image" alt="2048 game screenshot" />
                <h3 className="projects__subtitle">{t('projects.game2048.title')}</h3>
              </a>
              <p className="projects__description">{t('projects.game2048.description')}</p>
              <div className="projects__tools">
                <p className="projects__tech-stack">{t('projects.game2048.techStack')}</p>
                <p className="projects__tech-stack">{t('projects.game2048.patterns')}</p>
              </div>
            </article>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Project;