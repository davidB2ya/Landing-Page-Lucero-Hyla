import React, { useReducer } from 'react';
import Product from '../Product/Product';
import { stateInitial, reducerCart } from '../../../reducers/reducerCart';
import { TYPES } from '../../../actions/actionCart'

const ProductList = () => {

    const [state, dispatch] = useReducer(reducerCart, stateInitial)
    const {products} = state

    const addToCart = (id) =>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    };

    return(
        <div >
            {products.map((product) => (
               <Product key={product.id} data={product} addToCart={addToCart}/>
               ))}

        </div>
    )

}

export default ProductList