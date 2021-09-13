import React, { useContext, useState} from 'react';
import Product from '../Product/Product';
import {AppContext} from '../../Context/AppContext'
import style from './ProductList.module.css'

const ProductList = () => {

    const { products,addCart } = useContext(AppContext);

    const [productsFilter, setProductsFilter] = useState(products)

    const machine = () =>{
        let result = products.filter(catg => catg.category.includes("Equipo"))
        setProductsFilter(result) 
    }
    const essences = () =>{
        let result = products.filter(catg => catg.category.includes("Aromas"))
        setProductsFilter(result) 
    }
    const accessories = () =>{
        let result = products.filter(catg => catg.category.includes("Accesorio"))
        setProductsFilter(result) 
    }
    const all = () => {
        setProductsFilter(products) 
    }

    return(
        <div >
            <div className={style.btns}>
                <button className={style.btn} onClick={machine}>Equipos</button>
                <button className={style.btn} onClick={essences}>Aromas</button>
                <button className={style.btn} onClick={accessories}>Accesorios</button>
                <button className={style.btn} onClick={all}>Todos los Productos</button>
            </div>
            <div className={style.list}>
               {productsFilter.map((product) => (
               <Product key={product.id} data={product} addCart={addCart}/>
               ))}
            </div>
        </div>
    )

}

export default ProductList