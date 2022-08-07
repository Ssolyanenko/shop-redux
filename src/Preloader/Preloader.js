import React from 'react';
import Reload from ".././assets/img/Reload.svg"
import s from './Preloader.module.css'
const Preloader = (props) => {
    return (
        <div className={s.imgCenter}>   <img  src={Reload} alt='reloaded'/>  </div>
    );
};

export default Preloader;