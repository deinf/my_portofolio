import React from 'react';
import { projectsData } from "./data";
import "./publications.css";
import PublicationItem from './publicationItems'

const Publications = () => {

    
  return (
    <section className="publications section" id="publications">
        <h2 className="section__title">Publications</h2>
        <span className="section__subtitle">Recent Publications</span>
            <div className="publications__container container grid">
                {projectsData.slice(0,4).map((item) => {
                    return <PublicationItem item={item} key={item.id}/>
                })}
            </div>
       
    </section>
  );
}

export default Publications;