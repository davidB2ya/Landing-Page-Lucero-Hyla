import React from 'react';
import ReactPlayer from 'react-player/lib';
import intro from './Intro final.mp4'
import style from './Movie.module.css'

function Movie() {
    return (
        <div className={style.movie}>
            <ReactPlayer 
                url={intro}
                width='90%' 
                height='220px'
                playing
                volume='0'
                controls
                
            />  
        </div>
    )
}

export default Movie

