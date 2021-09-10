import React, { useContext} from 'react';
import style from './Trolley.module.css'
import ProductCart from './Product Cart/ProductCart';
import {AppContext} from '../Context/AppContext'

const Trolley = () => {

    const { cart, removeProduct, reduction, increase, removeAll, openModal  } = useContext(AppContext);
    return (
      <div className={style.trolley}>
           
           {cart.map((item, index) => (
            <ProductCart key={index} removeProduct={removeProduct} reduction={reduction} increase={increase} openModal={openModal} data={item}/>
               ))} 

            <button onClick={removeAll}>Limpiar Carrito</button>       
      </div>
    );
}
  
export default Trolley;
  