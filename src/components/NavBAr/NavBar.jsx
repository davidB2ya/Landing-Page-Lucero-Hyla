import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
    return (
        <div className={style.NavBar}>
            <ul>
                <li><Link to='/home'>Inicio</Link></li>
                <li><Link to='/catalogue'>Catálogos</Link></li>
                <li><Link to='/home/accessories'>Accesorios</Link></li>
            </ul>
        </div>
    )
}
    
export default NavBar