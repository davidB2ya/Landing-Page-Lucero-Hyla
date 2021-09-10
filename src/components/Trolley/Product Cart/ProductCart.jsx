import React from 'react';
import remove from '../../../assets/Mobile/Carrito/Group 64.png'
import style from './ProductCart.module.css'


const ProductCart = ({data, removeProduct, reduction, increase}) => {
    const {id, img, title, price, count} = data
    // console.log(data)
    return (
        <div className={style.product}>
            <img className={style.img} src={img} alt='product' />
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.price}>${price}</h3>
            <p className={style.line}>__________________________</p>
            <button className={style.remove} onClick={() => removeProduct(id)}><img src={remove} alt='icon' /></button>
            <button className={style.more} onClick={() => increase(id)}>+</button>
            <h3 className={style.count}>{count}</h3>
            <button className={style.subtr} onClick={() => reduction(id)}>-</button>
           
        </div>
    )
}

export default ProductCart