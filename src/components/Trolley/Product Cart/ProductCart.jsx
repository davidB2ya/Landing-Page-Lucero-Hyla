import React from 'react';
import remove from '../../../assets/Mobile/Carrito/Group 64.png'
import style from './ProductCart.module.css'


const ProductCart = ({data, delFromCart}) => {
    let {id, title, price, img} = data;
    return (
        <div className={style.product}>
            <img className={style.img} src={img} alt='product' />
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.price}>${price}</h3>
            <p className={style.line}>__________________________</p>
            <img className={style.remove} src={remove} alt='icon' />
            {/* <button onClick={sumar}>+</button>
            <h3>{state.count}</h3>
            <button onClick={restar}>-</button> */}
          
        </div>
    )
}

export default ProductCart