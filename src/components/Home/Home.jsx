import React from 'react';
import style from '../Home/Home.module.css'
import Certificates from './Certificates-Hyla/Certificates';
import { SliderData } from './Certificates-Hyla/SliderData';
import Models from './Equipment Models/Models';
import Header from './Header/Header';
// import InfoCard from './Info Card/InfoCard';
import Movie from './Movie Intro/Movie';

function Home() {

    return (
      <div className={style.home}>
        <Header/>
        <Movie/>
        {/* <InfoCard/> */}
        <Models/>
        <Certificates slides={SliderData}/>
      </div>
    );
}
  
  export default Home;
  