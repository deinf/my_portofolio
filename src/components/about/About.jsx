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
                     Passionate and results-driven Software Developer with over three years of experience specializing in
                      mobile and web development. Holds a Bachelor's Degree in Computer Systems (GPA: 3.85). Skilled
                      in building scalable, high-performance applications using modern technologies such as Flutter, Java,
                      Kotlin, React, and Laravel. Demonstrates strong analytical thinking, problem-solving abilities, and a
                      keen eye for UI/UX. Known for effective collaboration with cross-functional teams and a continuous
                      desire to learn and grow in the tech industry.

                </p>
            </div>
        </div>
    </section>
  );
}

export default About;