import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/specialty.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaBootstrap, FaNodeJs, FaAngular, FaGitAlt, FaDatabase, FaCogs, FaJava, FaHtml5, FaPython, FaCss3Alt } from "react-icons/fa";
import { SiKotlin, SiSpringboot, SiPostgresql, SiMongodb, SiPostman, SiRedux, SiReduxsaga, SiTailwindcss, SiExpress, SiJest, SiFirebase, SiDocker, SiAndroidstudio, SiXcode, SiSwift, SiSwagger, SiGithub, SiGitlab, SiGithubactions, SiHibernate, SiSpringsecurity, SiGradle, SiGnubash } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
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
                    <Chip className="specialties__chip" avatar={<SiJest />} variant="outlined" label="Jest" />
                    <Chip className="specialties__chip" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                    <Chip className="specialties__chip" avatar={<SiHibernate />} variant="outlined" label="Hibernate" />
                    <Chip className="specialties__chip" avatar={<SiSpringsecurity />} variant="outlined" label="Spring Security" />
                    <Chip className="specialties__chip" avatar={<FaDatabase />} variant="outlined" label="Spring Data" />
                    <Chip className="specialties__chip" avatar={<FaCogs />} variant="outlined" label="Maven" />
                    <Chip className="specialties__chip" avatar={<SiSwagger />} variant="outlined" label="Swagger" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.fullStack.programming')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<BiLogoJavascript />} variant="outlined" label="JavaScript" />
                    <Chip className="specialties__chip" avatar={<BiLogoTypescript />} variant="outlined" label="TypeScript" />
                    <Chip className="specialties__chip" avatar={<FaHtml5 />} variant="outlined" label="HTML5" />
                    <Chip className="specialties__chip" avatar={<FaCss3Alt />} variant="outlined" label="CSS3" />
                    <Chip className="specialties__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                    <Chip className="specialties__chip" avatar={<FaPython />} variant="outlined" label="Python" />
                    <Chip className="specialties__chip" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.fullStack.databases')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSQL" />
                    <Chip className="specialties__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                    <Chip className="specialties__chip" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                  </div>
                </div>
              </div>

              <div className="specialties__category">
                <h4 className="specialties__category-title">{t('specialties.fullStack.tools')}</h4>
                <div className="specialties__chips">
                  <Chip className="specialties__chip" avatar={<SiPostman />} variant="outlined" label="Postman" />
                </div>
              </div>
            </div>

            <div id="specialties__mobile" className="specialties__item">
              <FontAwesomeIcon icon={faMobileScreen} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">{t('specialties.mobile.title')}</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.mobile.android')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                    <Chip className="specialties__chip" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                    <Chip className="specialties__chip" avatar={<SiGradle />} variant="outlined" label="Gradle" />
                    <Chip className="specialties__chip" avatar={<SiFirebase />} variant="outlined" label="Firebase" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.mobile.ios')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiSwift />} variant="outlined" label="Swift" />
                    <Chip className="specialties__chip" avatar={<SiXcode />} variant="outlined" label="XCode" />
                    <Chip className="specialties__chip" avatar={<SiSwift />} variant="outlined" label="SwiftUI" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">{t('specialties.mobile.crossPlatform')}</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                    <Chip className="specialties__chip" avatar={<SiRedux />} variant="outlined" label="Redux" />
                    <Chip className="specialties__chip" avatar={<SiReduxsaga />} variant="outlined" label="Redux-Saga" />
                    <Chip className="specialties__chip" avatar={<SiJest />} variant="outlined" label="Jest" />
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