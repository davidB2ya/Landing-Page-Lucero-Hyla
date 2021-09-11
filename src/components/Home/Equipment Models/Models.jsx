import React from 'react';
import style from '../Equipment Models/Models.module.css';
import nst from '../../../assets/Mobile/Inicio/Group 75.png';
import steamer from '../../../assets/Mobile/Inicio/Group 76.png';
import est from '../../../assets/Mobile/Inicio/Group 77.png';

function Models() {
    return (
        <div className={style.models}>
            <span className={style.text}>Modelos Recientes</span>
            <div className={style.conjunto}>
                <div className={style.nst} >
                    <img src={nst} alt='nst' />
                    <span>NST</span>
                </div>
                <div className={style.steamer}>
                    <img  src={steamer} alt='steamer'/>
                   <span>STEAMER</span>
                </div>
                <div className={style.est}>
                    <img  src={est} alt='est' />
                    <span>EST</span>
                </div>
            </div>
        </div>
    )
}

export default Models