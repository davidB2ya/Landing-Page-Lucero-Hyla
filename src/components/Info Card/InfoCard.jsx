import React from 'react';
import style from './InfoCard.module.css'
import dog from '../../assets/Mobile/Group 72.png';
import baby from '../../assets/Mobile/Group 73.png';
import story from '../../assets/Mobile/Group 70.png';

function InfoCard() {
    return (
        <div className={style.infoCard}>
            <img className={style.dog} src={dog} alt='dog-Hyla' />
            <img className={style.baby} src={baby} alt='baby-Hyla' />
            <span className={style.text} >Evolución</span>
            <img className={style.story} src={story} alt='story-Hyla' />
        </div>
    )
}

export default InfoCard