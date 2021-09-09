import React, { useContext} from 'react';
import style from './Trolley.module.css'
import ProductCart from './Product Cart/ProductCart';
import {AppContext} from '../Context/AppContext'

const Trolley = () => {

    const { cart, removeProduct, reduction, increase  } = useContext(AppContext);
    return (
      <div className={style.trolley}>
           <button >Limpiar Carrito</button>
           {cart.map((item, index) => (
            <ProductCart key={index} removeProduct={removeProduct} reduction={reduction} increase={increase} data={item}/>
               ))}     
      </div>
    );
}
  
export default Trolley;
  