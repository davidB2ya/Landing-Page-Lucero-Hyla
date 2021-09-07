import React from 'react';
import img from '../../assets/Mobile/Inicio/WhatsApp Image 2021-08-30 at 11.34 1.png';
import trolley from '../../assets/Mobile/Inicio/Group 8.png';
import menu from '../../assets/Mobile/Inicio/Group.png';
import style from './Banner.module.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className={style.banner}>
            <img className={style.profile} src={img} alt='profile' />
            <span className={style.text}>Lucero Devia <br/> Ejecutivo Comercial Hyla</span>
            <li><Link to='/home/trolley'><img className={style.trolley} src={trolley} alt='icon' /></Link></li>
            <li><Link to='/home/navbar'><img className={style.menu} src={menu} alt='icon' /></Link></li>   
        </div>
    )
}

export default Banner