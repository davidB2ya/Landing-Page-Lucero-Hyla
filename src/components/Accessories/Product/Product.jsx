import React, { useState } from 'react';
import trolley from '../../../assets/Mobile/Accesorios/Group 50.png'
import more from '../../../assets/Mobile/Accesorios/Group.png'
import style from './Product.module.css'
import ProductDetail from './ProductDetail';

const Product = ({data,addCart}) => {
    
    const {id, img , title, price} = data
    
    const [modal, setModal] = useState(true)
    
    const openModal =() => setModal(!modal)

    const closeModal =() => setModal(!modal)

    return (
        <div>
            <div className={style.product}>
                <img className={style.img} src={img} alt='product' />
                <h2 className={style.title}>{title}</h2>
                <h3 className={style.price}>${price}</h3>
                <p className={style.line}>__________________________</p>
                {/* <span className={style.description}>{props.text}</span> */}
                <button className={style.trolley} onClick={()=>addCart(id)}><img src={trolley} alt='icon'/></button>          
                <img className={style.more} onClick={openModal} src={more} alt='icon' /> 
            </div>
            <div>
                <ProductDetail closeModal={closeModal} data={data} modal={modal}/>
            </div>
        </div>

    )
}

export default Product