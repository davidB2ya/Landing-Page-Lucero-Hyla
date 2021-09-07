import React from 'react';
import style from '../Accessories/Accessories.module.css'
import ProductList from './Product List/ProductList';


function Accessories() {

    return (
      <div className={style.accessories}>
          <ProductList/>
      </div>
    );
}
  
export default Accessories;
  