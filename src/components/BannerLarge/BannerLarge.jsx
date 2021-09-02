import React from 'react';
import img from '../../assets/Mobile/WhatsApp Image 2021-08-30 at 11.34 1.png';
import trolley from '../../assets/Mobile/Group 8.png';
import style from './BannerLarge.module.css';

function BannerLarge() {
    return (
        <div className={style.bannerLarge}>
           <img className={style.profile} src={img} alt='profile' />
           <span className={style.text}>Lucero Devia <br/> Ejecutivo Comercial Hyla</span>
           <div className={style.menu}>
                <span className={style.home}>Inicio</span>
                <span className={style.catalogs}>Catálogos</span>
                <span className={style.accessories}>Accesorios</span>
           </div>
           <img className={style.trolley} src={trolley} alt='icon' />
    
        </div>
    )
}

export default BannerLarge