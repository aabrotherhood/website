import React from 'react';
import animate from '../../assets/Spinner.gif';
import './styles.scss';

export default () => (
  <div
    className="preloader"
  >
    <img src={animate} alt="spinner"/>
  </div>
)