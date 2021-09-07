import React from 'react';
import trolley from '../../../assets/Mobile/Accesorios/Group 50.png'
import more from '../../../assets/Mobile/Accesorios/Group.png'
import style from '../Product/Product.module.css'

const Product = ({data, addToCart}) => {
    let {id, img, title, price} = data;
    return (
        <div className={style.product}>
           <img className={style.img} src={img} alt='product' />
           <h2 className={style.title}>{title}</h2>
           <h3 className={style.price}>${price}</h3>
           <p className={style.line}>__________________________</p>
           {/* <span className={style.description}>{props.text}</span> */}
           <button className={style.trolley} onClick={()=>addToCart(id)}><img src={trolley} alt='icon'/></button>          
           <img className={style.more} src={more} alt='icon' />           
        </div>
    )
}

export default Product