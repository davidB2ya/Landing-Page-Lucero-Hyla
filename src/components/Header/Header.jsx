import React from 'react';
import style from './Header.module.css'
import img from '../../assets/Mobile/Inicio/Group 71.png';

function Header() {
    return (
        <div className={style.header}>
            <span>"Con Hyla, Respirar es toda una Experiencia"</span>
            <img className={style.mounting} src={img} alt='mounting' />
        </div>
    )
}

export default Header