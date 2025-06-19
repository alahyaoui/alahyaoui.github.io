import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/specialty.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaBootstrap, FaNodeJs, FaAngular, FaGitAlt, FaDatabase, FaCogs, FaJava, FaHtml5, FaPython } from "react-icons/fa";
import { SiKotlin, SiSpringboot, SiPostgresql, SiMongodb, SiPostman, SiRedux, SiReduxsaga, SiTailwindcss, SiExpress, SiJest, SiFirebase, SiDocker, SiAndroidstudio, SiXcode, SiSwift, SiSwagger, SiGithub, SiGitlab, SiGithubactions, SiHibernate, SiSpringsecurity, SiGradle, SiTypescript, SiGnubash } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiAws } from "react-icons/di";
import FadeInSection from '../fade/FadeInSections'
import Chip from '@mui/material/Chip';
import { faCode, faMobileScreen, faServer, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Specialty() {
  const { t } = useTranslation();

  return (
    <section className="specialties" id="specialties">
      <FadeInSection>
        <div className="specialties__container">
          <h2 className="specialties__title">{t('specialties.title')}</h2>
          <div className="specialties__grid">
            <div id="specialties__fullStack" className="specialties__item">
              <FontAwesomeIcon icon={faCode} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">{t('specialties.fullStack.title')}</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.fullStack.frontend')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React.js" />
                    <Chip className="specialties__chip" avatar={<FaAngular />} variant="outlined" label="Angular" />
                    <Chip className="specialties__chip" avatar={<SiRedux />} variant="outlined" label="Redux" />
                    <Chip className="specialties__chip" avatar={<SiTailwindcss />} variant="outlined" label="Tailwind" />
                    <Chip className="specialties__chip" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.fullStack.backend')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaNodeJs />} variant="outlined" label="Node.js" />
                    <Chip className="specialties__chip" avatar={<SiExpress />} variant="outlined" label="Express.js" />
                    <Chip className="specialties__chip" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                    <Chip className="specialties__chip" avatar={<SiHibernate />} variant="outlined" label="Hibernate" />
                    <Chip className="specialties__chip" avatar={<SiSpringsecurity />} variant="outlined" label="Spring Security" />
                    <Chip className="specialties__chip" avatar={<FaDatabase />} variant="outlined" label="Spring Data" />
                    <Chip className="specialties__chip" avatar={<FaCogs />} variant="outlined" label="Maven" />
                    <Chip className="specialties__chip" avatar={<SiJest />} variant="outlined" label="Jest" />
                    <Chip className="specialties__chip" avatar={<SiSwagger />} variant="outlined" label="Swagger" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.fullStack.programming')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                    <Chip className="specialties__chip" avatar={<FaPython />} variant="outlined" label="Python" />
                    <Chip className="specialties__chip" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">Databases</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                    <Chip className="specialties__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSQL" />
                    <Chip className="specialties__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                  </div>
                </div>
              </div>
            </div>

            <div id="specialties__mobile" className="specialties__item">
              <FontAwesomeIcon icon={faMobileScreen} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">{t('specialties.mobile.title')}</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.mobile.native')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                    <Chip className="specialties__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.mobile.crossPlatform')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                  </div>
                </div>
              </div>
            </div>

            <div id="specialties__devops" className="specialties__item">
              <FontAwesomeIcon icon={faServer} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">{t('specialties.devops.title')}</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.devops.cloud')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<DiAws />} variant="outlined" label="AWS" />
                    <Chip className="specialties__chip" avatar={<SiDocker />} variant="outlined" label="Docker" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.devops.cicd')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                    <Chip className="specialties__chip" avatar={<SiGithub />} variant="outlined" label="GitHub" />
                    <Chip className="specialties__chip" avatar={<SiGitlab />} variant="outlined" label="GitLab" />
                    <Chip className="specialties__chip" avatar={<SiGithubactions />} variant="outlined" label="GitHub Actions" />
                  </div>
                </div>
              </div>
            </div>

            <div id="specialties__languages" className="specialties__item">
              <FontAwesomeIcon icon={faLanguage} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">{t('specialties.languages.title')}</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">Proficiency</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" variant="outlined" label={t('specialties.languages.french')} />
                    <Chip className="specialties__chip" variant="outlined" label={t('specialties.languages.english')} />
                    <Chip className="specialties__chip" variant="outlined" label={t('specialties.languages.dutch')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Specialty;