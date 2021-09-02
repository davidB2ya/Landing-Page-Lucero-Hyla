import React from 'react';
import img from '../../assets/Mobile/WhatsApp Image 2021-08-30 at 11.34 1.png';
import trolley from '../../assets/Mobile/Group 8.png';
import menu from '../../assets/Mobile/Group.png';
import style from './Banner.module.css';

function Banner() {
    return (
        <div className={style.banner}>
           <img className={style.profile} src={img} alt='profile' />
           <span className={style.text}>Lucero Devia <br/> Ejecutivo Comercial Hyla</span>
           <img className={style.trolley} src={trolley} alt='icon' />
           <img className={style.menu} src={menu} alt='icon' />           
        </div>
    )
}

export default Banner