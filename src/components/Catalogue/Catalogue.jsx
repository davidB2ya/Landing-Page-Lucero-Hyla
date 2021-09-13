import style from '../Catalogue/Catalogue.module.css'
import React from 'react';

import Principal from '../../assets/Mobile/Catálogo/Captura de pantalla 2021-09-01 114630.png' 
import NST from "../../assets/Mobile/Catálogo/WhatsApp Image 2021-08-30 at 10.13.47 AM (1).jpeg"
import EST from "../../assets/Mobile/Catálogo/WhatsApp Image 2021-08-30 at 10.13.47 AM.jpeg"
import Tabla from '../../assets/Mobile/Catálogo/WhatsApp Image 2021-08-30 at 10.13.48 AM.jpeg'
import img1 from "../../assets/Mobile/Catálogo/WhatsApp Image 2021-08-30 at 11.24.55 AM.jpeg"
import img2 from "../../assets/Mobile/Catálogo/WhatsApp Image 2021-08-30 at 11.34.12 AM (2).jpeg"

function Catalogue() {
  return (
    <div className={style.img}>
      <img className={style.img1} src={Principal} alt={"img"}></img>
      <img className={style.img2} src={NST} alt={"img"}></img>
      <img className={style.img3} src={EST} alt={"img"}></img>
      <img className={style.img4} src={Tabla} alt={"img"}></img>
      <img className={style.img5} src={img1} alt={"img"}></img>
      <img className={style.img6} src={img2} alt={"img"}></img>      
    </div>
  );
}
export default Catalogue;
  