import React from 'react';
import remove from '../../../assets/Mobile/Carrito/Group 64.png'
import style from './ProductCart.module.css'


const ProductCart = ({data, removeProduct, reduction, increase}) => {
    const {id, img, title, price, count } = data
    return (
        <div className={style.product}>
            <img className={style.img} src={img} alt='product' />
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.price}>${price}</h3>
            <p className={style.line}>__________________________</p>
            <button className={style.remove} onClick={() => removeProduct(id)}><img className={style.remove} src={remove} alt='icon' /></button>
            <button onClick={increase}>+</button>
            <h3>{count}</h3>
            <button onClick={reduction}>-</button>
          
        </div>
    )
}

export default ProductCart