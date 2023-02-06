import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBandcamp,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div class='social-container'>
      <br />
      <a href='https://bloodsportz.bandcamp.com/' className='youtube social'>
        <FontAwesomeIcon icon={faBandcamp} size='3x' />
      </a>
      <a href='https://www.facebook.com/BLDSPRTZ/' className='youtube social'>
        <FontAwesomeIcon icon={faFacebook} size='3x' />
      </a>
      <a href='https://www.instagram.com/bldsprtz/' className='youtube social'>
        <FontAwesomeIcon className='color' icon={faInstagram} size='3x' />
      </a>
    </div>
  );
};

export default Social;
