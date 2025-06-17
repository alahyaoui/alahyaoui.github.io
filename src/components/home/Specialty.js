import React from 'react';
import './style/specialty.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPhp, FaPython, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiSwift, SiKotlin, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiSqlite, SiHeroku, SiPostman, SiQt, SiAndroidstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { CgShapeCircle } from "react-icons/cg";
import FadeInSection from '../fade/FadeInSections'
import Chip from '@mui/material/Chip';
import { faAppStore, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

function Specialty() {
  return (
    <section className="specialties" id="specialties">
      <FadeInSection>
        <div className="specialties__container">
          <h2 className="specialties__title">Specialties</h2>
          <div className="specialties__grid">
            <div className="specialties__item">
              <FontAwesomeIcon icon={faReact} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Full-Stack Web Development</h3>
              <div className="specialties__tech-stack">
                <span className="specialties__tech-label">Tech stack:</span>
                <div className="specialties__chips">
                  <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React.js" />
                  <Chip className="specialties__chip" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                  <Chip className="specialties__chip" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                  <Chip className="specialties__chip" avatar={<FaLaravel />} variant="outlined" label="Laravel" />
                  <Chip className="specialties__chip" avatar={<SiDjango />} variant="outlined" label="Django" />
                  <Chip className="specialties__chip" avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                  <Chip className="specialties__chip" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                  <Chip className="specialties__chip" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                  <Chip className="specialties__chip" avatar={<FaPhp />} variant="outlined" label="PHP" />
                  <Chip className="specialties__chip" avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                  <Chip className="specialties__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                  <Chip className="specialties__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                  <Chip className="specialties__chip" avatar={<SiPostman />} variant="outlined" label="Postman" />
                </div>
              </div>
            </div>

            <div className="specialties__item">
              <FontAwesomeIcon icon={faAppStore} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Software Development</h3>
              <div className="specialties__tech-stack">
                <span className="specialties__tech-label">Tech stack:</span>
                <div className="specialties__chips">
                  <Chip className="specialties__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                  <Chip className="specialties__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                  <Chip className="specialties__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                  <Chip className="specialties__chip" avatar={<SiSwift />} variant="outlined" label="Swift" />
                  <Chip className="specialties__chip" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                  <Chip className="specialties__chip" avatar={<SiCplusplus />} variant="outlined" label="C/C++" />
                  <Chip className="specialties__chip" avatar={<SiQt />} variant="outlined" label="Qt Creator" />
                  <Chip className="specialties__chip" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                  <Chip className="specialties__chip" avatar={<SiSqlite />} variant="outlined" label="SQLite" />
                </div>
              </div>
            </div>

            <div className="specialties__item">
              <FontAwesomeIcon icon={faBuilding} size="4x" className="specialties__icon" />
              <h3 className="specialties__subtitle">Enterprise Resource Planning (ERP) Development</h3>
              <div className="specialties__tech-stack">
                <span className="specialties__tech-label">Tech stack:</span>
                <div className="specialties__chips">
                  <Chip className="specialties__chip" avatar={<CgShapeCircle />} variant="outlined" label="Odoo" />
                  <Chip className="specialties__chip" avatar={<FaPython />} variant="outlined" label="Python" />
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