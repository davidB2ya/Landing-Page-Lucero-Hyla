import React, { useReducer } from 'react';
import style from './Trolley.module.css'
import ProductCart from './Product Cart/ProductCart';
import { stateInitial, reducerCart } from '../../reducers/reducerCart';
import { TYPES } from '../../actions/actionCart'

const Trolley = () => {
    const [state, dispatch] = useReducer(reducerCart, stateInitial)
    const {cart} = state

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    };
    console.log(state)
    return (
      <div className={style.trolley}>
           <button onClick={clearCart}>Limpiar Carrito</button>
           {cart.map((item, index) => (
               <ProductCart key={index} data={item}/>
               ))}     
      </div>
    );
}
  
export default Trolley;
  