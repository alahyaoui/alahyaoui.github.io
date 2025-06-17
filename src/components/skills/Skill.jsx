import React from 'react';
import './style/skill.css';
import Chip from '@mui/material/Chip';

import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPython, FaReact, FaBootstrap, FaGitAlt, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTypescript, SiKotlin, SiSpringboot, SiPostgresql, SiMongodb, SiGnubash, SiPostman, SiJira, SiConfluence, SiFigma, SiSlack, SiRedux, SiReduxsaga, SiTailwindcss, SiExpress, SiJest, SiSwagger, SiHibernate, SiFirebase, SiDocker, SiKubernetes, SiGithub, SiGitlab, SiGithubactions, SiIntellijidea, SiXcode, SiAndroidstudio, SiOpenai } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiAws } from "react-icons/di";
import { BsCursor } from "react-icons/bs";

function Skill() {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">
                <h2 className="skills__title">Skills</h2>
                <div className="skills__grid">
                    <article className="skills__category">
                        <h3 className="skills__subtitle">Languages</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                            <Chip className="skills__chip" avatar={<SiTypescript />} variant="outlined" label="TypeScript" />
                            <Chip className="skills__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                            <Chip className="skills__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                            <Chip className="skills__chip" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                            <Chip className="skills__chip" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                            <Chip className="skills__chip" avatar={<FaPython />} variant="outlined" label="Python" />
                            <Chip className="skills__chip" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Frontend</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<FaReact />} variant="outlined" label="React.js" />
                            <Chip className="skills__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                            <Chip className="skills__chip" avatar={<FaAngular />} variant="outlined" label="Angular" />
                            <Chip className="skills__chip" avatar={<SiRedux />} variant="outlined" label="Redux" />
                            <Chip className="skills__chip" avatar={<SiReduxsaga />} variant="outlined" label="Redux-Saga" />
                            <Chip className="skills__chip" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                            <Chip className="skills__chip" avatar={<SiTailwindcss />} variant="outlined" label="Tailwind" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Backend</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<FaNodeJs />} variant="outlined" label="Node.js" />
                            <Chip className="skills__chip" avatar={<SiExpress />} variant="outlined" label="Express.js" />
                            <Chip className="skills__chip" avatar={<SiJest />} variant="outlined" label="Jest" />
                            <Chip className="skills__chip" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                            <Chip className="skills__chip" avatar={<SiSwagger />} variant="outlined" label="Swagger" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Databases</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                            <Chip className="skills__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSQL" />
                            <Chip className="skills__chip" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                            <Chip className="skills__chip" avatar={<SiHibernate />} variant="outlined" label="Hibernate" />
                            <Chip className="skills__chip" avatar={<SiFirebase />} variant="outlined" label="Firebase" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">DevOps</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<DiAws />} variant="outlined" label="AWS" />
                            <Chip className="skills__chip" avatar={<SiDocker />} variant="outlined" label="Docker" />
                            <Chip className="skills__chip" avatar={<SiKubernetes />} variant="outlined" label="Kubernetes" />
                            <Chip className="skills__chip" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                            <Chip className="skills__chip" avatar={<SiGithub />} variant="outlined" label="GitHub" />
                            <Chip className="skills__chip" avatar={<SiGitlab />} variant="outlined" label="GitLab" />
                            <Chip className="skills__chip" avatar={<SiGithubactions />} variant="outlined" label="GitHub Actions" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Tools</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<BiLogoVisualStudio />} variant="outlined" label="VSCode" />
                            <Chip className="skills__chip" avatar={<SiIntellijidea />} variant="outlined" label="IntelliJ" />
                            <Chip className="skills__chip" avatar={<SiXcode />} variant="outlined" label="XCode" />
                            <Chip className="skills__chip" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                            <Chip className="skills__chip" avatar={<SiPostman />} variant="outlined" label="Postman" />
                            <Chip className="skills__chip" avatar={<SiJira />} variant="outlined" label="Jira" />
                            <Chip className="skills__chip" avatar={<SiConfluence />} variant="outlined" label="Confluence" />
                            <Chip className="skills__chip" avatar={<SiFigma />} variant="outlined" label="Figma" />
                            <Chip className="skills__chip" avatar={<SiSlack />} variant="outlined" label="Slack" />
                            <Chip className="skills__chip" avatar={<SiOpenai />} variant="outlined" label="ChatGPT" />
                            <Chip className="skills__chip" avatar={<BsCursor />} variant="outlined" label="Cursor" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Skill;