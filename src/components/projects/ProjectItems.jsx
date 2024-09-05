import React from 'react';
import Applestore_logo from '../../assets/icon/app-store.png'
import Web_logo from '../../assets/icon/www.png'
import Playstore_logo from '../../assets/icon/playstore.png'
import Github_logo from '../../assets/icon/github.png'

import ModalImage from "react-modal-image";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            {/* <img className="project__img" src={item.image} alt="" /> */}
            <ModalImage className='project__img'
                small={item.image}
                large={item.image}
                alt=""
                />;
            <h3 className="project__title">{item.title}</h3>
            <span className='project__deskripsi'>{item.deskripsi}</span>
            <div className='container_project_link'>
                {item.playStoreUrl != "" ? (<a href={item.playStoreUrl} target="_blank"><img className='img__proj' src={Playstore_logo} /></a>) : (<></>)}
                {item.appleStoreUrl != "" ? (<a href={item.appleStoreUrl} target="_blank"><img className='img__proj' src={Applestore_logo} /></a>) : (<></>)}
                {item.websiteUrl != "" ? (<a href={item.websiteUrl} target="_blank"><img className='img__proj' src={Web_logo} /></a>) : (<></>)}
                {item.githubUrl != "" ? (<a href={item.githubUrl} target="_blank"><img className='img__proj' src={Github_logo} /></a>) : (<></>)}                
            </div>
        </div>
    );
}

export default ProjectItems;