import React, { useContext} from 'react';
import Product from '../Product/Product';
import {AppContext} from '../../Context/AppContext'

const ProductList = () => {

    const { products,addCart } = useContext(AppContext);
    // console.log(products)
    return(
        <div >
            {products.map((product) => (
               <Product key={product.id} data={product} addCart={addCart}/>
               ))}

        </div>
    )

}

export default ProductList