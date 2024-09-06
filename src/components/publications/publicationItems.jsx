import React from 'react';

import Web_logo from '../../assets/icon/www.png'


import ModalImage from "react-modal-image";

const ProjectItems = ({item}) => {
  return (
        <div className="publication__card" key={item.id}>
            {/* <img className="project__img" src={item.image} alt="" /> */}
          <div className="image-container">
               <ModalImage className='publication__img'
                small={item.image}
                large={item.image}
                alt=""
              />
               <div className="overlay"></div>
           </div>
            <h3 className="publication__title">{item.title}</h3>
            <span className='publications__deskripsi'>{item.deskripsi}</span>
            <div className='container_publicationt_link'>
              <a href={item.url} target="_blank">
                  <img className='img__proj' src={Web_logo} />
              </a>
            </div>
        </div>
    );
}

export default ProjectItems;