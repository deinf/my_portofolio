import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile.png";

import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A short introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="about" className="about__img" />
            <div className="about__data">
                <Info />
                <p className="about__description">
                      I am a dedicated software developer with a Bachelor's degree in Computer Systems and nearly 3 years of hands-on experience, specializing in mobile and web development. I am enthusiastic about delving into new and challenging projects,
                      particularly in web development and cross-platform mobile development. My approach combines strong analytical skills with creativity to build scalable, high-performance applications. In addition to my software development expertise, I am also a data enthusiast with a keen interest in data analysis, data mining, and data engineering. I am passionate about leveraging technology to address real-world challenges and uncover insights through data-driven solutions.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;