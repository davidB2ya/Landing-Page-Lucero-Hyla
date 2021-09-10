import React from 'react';
import style from '../Certificates-Hyla/Certificates.module.css'
import Certificate1 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142846.png';
import Certificate2 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142845.png';
import Certificate3 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142844.png';
import Certificate4 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142849.png';
import Certificate5 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142847.png';
import Certificate6 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142850.png';
import Certificate7 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142848.png';
import Certificate8 from '../../../assets/Mobile/Inicio/Captura de pantalla 2021-09-01 142851.png';

function Certificates() {
    return (
        <div className={style.certificates}>
            <span className={style.text} >Certificados</span>
            <img className={style.Certificate1} src={Certificate1} alt='Certificate1' />
            <img className={style.Certificate2} src={Certificate2} alt='Certificate2' />
            <img className={style.Certificate3} src={Certificate3} alt='Certificate3' />
            <img className={style.Certificate4} src={Certificate4} alt='Certificate4' />
            <img className={style.Certificate5} src={Certificate5} alt='Certificate5' />
            <img className={style.Certificate6} src={Certificate6} alt='Certificate6' />
            <img className={style.Certificate7} src={Certificate7} alt='Certificate7' />
            <img className={style.Certificate8} src={Certificate8} alt='Certificate8' />
        </div>
    )
}

export default Certificates