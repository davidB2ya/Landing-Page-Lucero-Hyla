import React from 'react';
import style from './Models.module.css';
import nst from '../../assets/Mobile/Group 75.png';
import steamer from '../../assets/Mobile/Group 76.png';
import est from '../../assets/Mobile/Group 77.png';

function Models() {
    return (
        <div className={style.models}>
            <span className={style.text}>Modelos Recientes</span>
            <div>
                <img className={style.nst} src={nst} alt='nst' />
                <span>NST</span>
            </div>
            <div>
                <img className={style.steamer} src={steamer} alt='steamer'/>
                <span>STEAMER</span>
            </div>
            <div>
                <img className={style.est} src={est} alt='est' />
                <span>EST</span>
            </div>
        </div>
    )
}

export default Models