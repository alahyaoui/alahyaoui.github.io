import React from 'react';
import './style/project.css';
import tomtomAmigoImage from './assets/img/tomtom_amigo.png';
import escooterFinderImage from './assets/img/escooter_finder.png';
import rainbowAttackImage from './assets/img/rainbow-attack.jpeg';
import curriculumSimulatorImage from './assets/img/curriculum-simulator.jpeg';
import stibRideImage from './assets/img/stibride.jpeg';
import esiReadingImage from './assets/img/esi_reading.jpeg';
import abaloneImage from './assets/img/abalone.jpeg';
import game2048Image from './assets/img/2048.jpeg';
import FadeInSection from '../fade/FadeInSections'

function Project() {
  return (
    <section className="projects" id="project">
      <FadeInSection>
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid">
          <article className="projects__item">
            <a href="https://www.tomtom.com/en_gb/sat-nav/amigo/" target="_blank" rel="noreferrer" className="projects__link">
              <img src={tomtomAmigoImage} className="projects__image" alt="TomTom AmiGO app screenshot" />
              <h3 className="projects__subtitle">TomTom AmiGO</h3>
            </a>
            <p className="projects__description">TomTom AmiGO is a free and adless GPS navigation mobile app available on Android and iOS also supporting Android Auto and Carplay, it offers a lot of features such as trusted maps, real-time traffic updates, speed camera alerts, etc…</p>
            <p className="projects__tech-stack">Used: React Native, Redux Saga, Jest, Java, Kotlin, Swift</p>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/curriculum-simulator" target="_blank" rel="noreferrer" className="projects__link">
              <img src={escooterFinderImage} className="projects__image" alt="E-Scooter Finder app screenshot" />
              <h3 className="projects__subtitle">E-Scooter Finder</h3>
            </a>
            <p className="projects__description">Android application, which finds you nearby e-scooters from various electric scooter sharing companies.</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Frontend: Kotlin, Google Maps SDK, Retrofit, Android Studio</p>
              <p className="projects__tech-stack">Backend: Kotlin Spring, RestTemplate, Spring Data JPA, PostGIS, AWS</p>
              <p className="projects__tech-stack">Patterns: MVVM, Observer, Repository, Singleton, REST</p>
            </div>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/curriculum-simulator" target="_blank" rel="noreferrer" className="projects__link">
              <img src={curriculumSimulatorImage} className="projects__image" alt="Curriculum Simulator app screenshot" />
              <h3 className="projects__subtitle">Curriculum Simulator</h3>
            </a>
            <p className="projects__description">Java Spring web application for students of my school to see which subjects are accessible to them according to the subjects they have passed.</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Used: Java, Spring Boot, Bootstrap, Thymeleaf, Lombok, H2</p>
              <p className="projects__tech-stack">Patterns: MVC, Observer, Repository, Singleton</p>
            </div>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/StibRide" target="_blank" rel="noreferrer" className="projects__link">
              <img src={stibRideImage} className="projects__image" alt="Stib Ride app screenshot" />
              <h3 className="projects__subtitle">Stib Ride</h3>
            </a>
            <p className="projects__description">JavaFX application that allows users to get the shortest path between two metro station in the public transport network of Brussels.</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Used: Java, JavaFx, Scene Builder, SQLite</p>
              <p className="projects__tech-stack">Patterns: MVP, Observer, Repository, Dao, Dto</p>
            </div>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/RainbowAttack" target="_blank" rel="noreferrer" className="projects__link">
              <img src={rainbowAttackImage} className="projects__image" alt="Rainbow Attack app screenshot" />
              <h3 className="projects__subtitle">Rainbow Attack</h3>
            </a>
            <p className="projects__description">Developed in the context of my cyber security course. This TUI C++ application allows you to generate a rainbow table and crack sha256 hashed passwords using the previously generated rainbow table.</p>
            <p className="projects__tech-stack">Used: C++, Makefile, Bash script</p>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/esi_reading-odoo" target="_blank" rel="noreferrer" className="projects__link">
              <img src={esiReadingImage} className="projects__image" alt="Reading Esi app screenshot" />
              <h3 className="projects__subtitle">Reading Esi</h3>
            </a>
            <p className="projects__description">Reading Esi is an odoo module helping bookstore organizations to store, rent, buy and sell books</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Used: Odoo, Python</p>
              <p className="projects__tech-stack">Patterns: MVC</p>
            </div>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/Abalone" target="_blank" rel="noreferrer" className="projects__link">
              <img src={abaloneImage} className="projects__image" alt="Abalone game screenshot" />
              <h3 className="projects__subtitle">Abalone</h3>
            </a>
            <p className="projects__description">Developed the Abalone game using C++ and QT Designer while following the OOP principles.</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Used: C++, QT Designer</p>
              <p className="projects__tech-stack">Patterns: MVC, Observer</p>
            </div>
          </article>

          <article className="projects__item">
            <a href="https://github.com/alahyaoui/2048" target="_blank" rel="noreferrer" className="projects__link">
              <img src={game2048Image} className="projects__image" alt="2048 game screenshot" />
              <h3 className="projects__subtitle">2048</h3>
            </a>
            <p className="projects__description">My JavaFX implementation of the 2048 game following the OOP principles</p>
            <div className="projects__tools">
              <p className="projects__tech-stack">Used: Java, JavaFx</p>
              <p className="projects__tech-stack">Patterns: MVC, Observer</p>
            </div>
          </article>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Project;