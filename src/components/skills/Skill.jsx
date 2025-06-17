import React from 'react';
import './style/skill.css';

import Chip from '@mui/material/Chip';

import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPhp, FaDatabase, FaPython, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiSolidity, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiSqlite, SiMongodb, SiHeroku, SiGnubash, SiPostman, SiVirtualbox, SiQt, SiAndroidstudio, SiCisco, SiSwift } from "react-icons/si";
import { GrMysql, GrOracle, } from "react-icons/gr";
import { DiAws } from "react-icons/di";
import { CgShapeCircle } from "react-icons/cg";
import { GiGears } from "react-icons/gi";

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
                            <Chip className="skills__chip" avatar={<FaJava />} variant="outlined" label="Java" />
                            <Chip className="skills__chip" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                            <Chip className="skills__chip" avatar={<SiSwift />} variant="outlined" label="Swift" />
                            <Chip className="skills__chip" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                            <Chip className="skills__chip" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                            <Chip className="skills__chip" avatar={<SiCplusplus />} variant="outlined" label="C/C++" />
                            <Chip className="skills__chip" avatar={<FaPhp />} variant="outlined" label="PHP" />
                            <Chip className="skills__chip" avatar={<FaDatabase />} variant="outlined" label="SQL" />
                            <Chip className="skills__chip" avatar={<FaPython />} variant="outlined" label="Python" />
                            <Chip className="skills__chip" avatar={<SiSolidity />} variant="outlined" label="Solidity" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Frameworks</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<FaReact />} variant="outlined" label="React Native" />
                            <Chip className="skills__chip" avatar={<FaReact />} variant="outlined" label="React.js" />
                            <Chip className="skills__chip" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                            <Chip className="skills__chip" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                            <Chip className="skills__chip" avatar={<FaLaravel />} variant="outlined" label="Laravel" />
                            <Chip className="skills__chip" avatar={<SiDjango />} variant="outlined" label="Django" />
                            <Chip className="skills__chip" avatar={<CgShapeCircle />} variant="outlined" label="Odoo" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Databases</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                            <Chip className="skills__chip" avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                            <Chip className="skills__chip" avatar={<SiSqlite />} variant="outlined" label="SQLite" />
                            <Chip className="skills__chip" avatar={<GrOracle />} variant="outlined" label="Oracle Apex" />
                            <Chip className="skills__chip" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Cloud Services</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                            <Chip className="skills__chip" avatar={<DiAws />} variant="outlined" label="AWS" />
                        </div>
                    </article>

                    <article className="skills__category">
                        <h3 className="skills__subtitle">Tools</h3>
                        <div className="skills__chips">
                            <Chip className="skills__chip" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                            <Chip className="skills__chip" avatar={<SiPostman />} variant="outlined" label="Postman" />
                            <Chip className="skills__chip" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                            <Chip className="skills__chip" avatar={<GiGears />} variant="outlined" label="Makefile" />
                            <Chip className="skills__chip" avatar={<SiVirtualbox />} variant="outlined" label="Virtual Machines" />
                            <Chip className="skills__chip" avatar={<SiQt />} variant="outlined" label="Qt Creator" />
                            <Chip className="skills__chip" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                            <Chip className="skills__chip" avatar={<SiCisco />} variant="outlined" label="Cisco Packet Tracer" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Skill;