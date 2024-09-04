import React from 'react';
import "./skills.css";

import { stackList } from "./data";
import {

  Technologies,
  Tech,
  TechImg,
  TechName,
 
} from "./aboutElements";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">I have become confident using the following technologies</span>
      <div className="skills__container container grid">
        
        <div className="skills__content">
            <Technologies>
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
       
        </div>
      </div>
    </section>
  );
}

export default Skills;