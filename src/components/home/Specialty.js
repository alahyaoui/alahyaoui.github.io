import React from 'react';
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
  return (
    <section className="specialties" id="specialties">
      <FadeInSection>
        <div className="specialties__container">
          <h2 className="specialties__title">Specialties</h2>
          <div className="specialties__grid">
            <div className="specialties__item">
              <FontAwesomeIcon icon={faCode} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Full Stack Development</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">Programming Languages</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="JavaScript" />
                    <Chip className="specialties__chip" avatar={<SiTypescript />} variant="outlined" label="TypeScript" />
                    <Chip className="specialties__chip" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                    <Chip className="specialties__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                    <Chip className="specialties__chip" avatar={<FaPython />} variant="outlined" label="Python" />
                    <Chip className="specialties__chip" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">Frontend</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React.js" />
                    <Chip className="specialties__chip" avatar={<FaAngular />} variant="outlined" label="Angular" />
                    <Chip className="specialties__chip" avatar={<SiRedux />} variant="outlined" label="Redux" />
                    <Chip className="specialties__chip" avatar={<SiTailwindcss />} variant="outlined" label="Tailwind" />
                    <Chip className="specialties__chip" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">Backend</h4>
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
                  <h4 className="specialties__category-title">Databases</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                    <Chip className="specialties__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSQL" />
                    <Chip className="specialties__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                  </div>
                </div>
              </div>
            </div>

            <div className="specialties__item">
              <FontAwesomeIcon icon={faMobileScreen} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Mobile Development</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">Android</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                    <Chip className="specialties__chip" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                    <Chip className="specialties__chip" avatar={<SiGradle />} variant="outlined" label="Gradle" />
                    <Chip className="specialties__chip" avatar={<SiFirebase />} variant="outlined" label="Firebase" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">iOS</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<SiSwift />} variant="outlined" label="Swift" />
                    <Chip className="specialties__chip" avatar={<SiXcode />} variant="outlined" label="XCode" />
                    <Chip className="specialties__chip" avatar={<SiSwift />} variant="outlined" label="SwiftUI" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">Cross-Platform</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                    <Chip className="specialties__chip" avatar={<SiRedux />} variant="outlined" label="Redux" />
                    <Chip className="specialties__chip" avatar={<SiReduxsaga />} variant="outlined" label="Redux-Saga" />
                    <Chip className="specialties__chip" avatar={<SiJest />} variant="outlined" label="Jest" />
                    <Chip className="specialties__chip" avatar={<SiPostman />} variant="outlined" label="Postman" />
                  </div>
                </div>
              </div>
            </div>

            <div className="specialties__item">
              <FontAwesomeIcon icon={faServer} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">DevOps</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">Cloud & Infrastructure</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<DiAws />} variant="outlined" label="AWS" />
                    <Chip className="specialties__chip" avatar={<SiDocker />} variant="outlined" label="Docker" />
                  </div>
                </div>

                <div className="specialties__category">
                  <h4 className="specialties__category-title">Version Control & CI/CD</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                    <Chip className="specialties__chip" avatar={<SiGithub />} variant="outlined" label="GitHub" />
                    <Chip className="specialties__chip" avatar={<SiGitlab />} variant="outlined" label="GitLab" />
                    <Chip className="specialties__chip" avatar={<SiGithubactions />} variant="outlined" label="GitHub Actions" />
                  </div>
                </div>
              </div>
            </div>

            <div className="specialties__item">
              <FontAwesomeIcon icon={faLanguage} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Spoken Languages</h3>
              <div className="specialties__tech-stack">
                <div className="specialties__category">
                  <h4 className="specialties__category-title">Proficiency</h4>
                  <div className="specialties__chips">
                    <Chip className="specialties__chip" variant="outlined" label="French (Mother Tongue)" />
                    <Chip className="specialties__chip" variant="outlined" label="English (Full Professional)" />
                    <Chip className="specialties__chip" variant="outlined" label="Dutch (Limited Professional)" />
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