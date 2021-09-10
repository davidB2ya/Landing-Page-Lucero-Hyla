import React, { useContext } from 'react';
import img from '../../assets/Mobile/Inicio/WhatsApp Image 2021-08-30 at 11.34 1.png';
import trolley from '../../assets/Mobile/Inicio/Group 8.png';
import menu from '../../assets/Mobile/Inicio/Group.png';
import style from './Banner.module.css'
import { Link } from 'react-router-dom';
import {AppContext} from '../Context/AppContext'

function Banner() {

    const { cart } = useContext(AppContext);

    return (
        <div className={style.banner}>
            <img className={style.profile} src={img} alt='profile' />
            <span className={style.text}>Lucero Devia <br/> Ejecutivo Comercial Hyla</span>
            <div className={style.cartCount}>
                <li><Link to='/home/trolley'><img className={style.trolley} src={trolley} alt='icon' /></Link></li>
                <span className={style.count}>{cart.length}</span>
            </div>
            <li><Link to='/home/navbar'><img className={style.menu} src={menu} alt='icon' /></Link></li>   
            <ul className={style.menuSecundario}>
                <li><Link className={style.link} to='/home'>Inicio</Link></li>
                <li><Link className={style.link} to='/catalogue'>Catálogos</Link></li>
                <li><Link className={style.link} to='/home/accessories'>Accesorios</Link></li>
            </ul>


        </div>
    )
}

export default Banner