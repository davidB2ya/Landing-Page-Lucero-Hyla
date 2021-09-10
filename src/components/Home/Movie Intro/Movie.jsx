import React from 'react';
import ReactPlayer from 'react-player/lib';
import intro from '../Movie Intro/Intro final.mp4'
import style from '../Movie Intro/Movie.module.css'
import dog from '../../../assets/Mobile/Inicio/Group 72.png';
import baby from '../../../assets/Mobile/Inicio/Group 73.png';
import story from '../../../assets/Mobile/Inicio/Group 70.png';

function Movie() {
    return (
        <div className={style.complete}>
            <div className={style.movie}>
                <ReactPlayer 
                    url={intro}
                    // width='90%' 
                    // height='220px'
                    playing
                    volume='0'
                    controls
                
                />  
            </div>
            <div className={style.infoCard}>
                <img className={style.dog} src={dog} alt='dog-Hyla' />
                <img className={style.baby} src={baby} alt='baby-Hyla' />
            </div>
            <div className={style.evolution}>
                <span className={style.text} >Evolución</span>
                <img className={style.story} src={story} alt='story-Hyla' />
            </div>
        </div>
    )
}

export default Movie

