import React, { useContext} from 'react';
import style from './Trolley.module.css'
import ProductCart from './Product Cart/ProductCart';
import {AppContext} from '../Context/AppContext'
import Whatsapp from '../../assets/Mobile/Carrito/Group 62.png'
const Trolley = () => {
  
  const { cart, removeProduct, reduction, increase, removeAll, openModal  } = useContext(AppContext);
  
  
  let showTotal = 0;
  let waMsj = ''


  const waString=()=>{
    let str = '';
    let total = 0;

    //for every item in the order creates a string and adds thas string to str
    
    cart.forEach((item,index)=>{
        if(item.count!==0)
        {let subst=`Producto(${index+1}): ${item.title}%20 (${item.count})%20subtotal:$${item.count*item.price}%20`;
        str+=subst;   
        total += item.count*item.price
        }
    }   
    )
    //add the string to whatsapp url
    let waS = `https://wa.me/573052290670?text=${str}`
    //replaces all spaces for %20 that is a space in url
    waS=  waS.replace(/ /g, '%20');
   ;
    //set the url with the total
    waMsj=`${waS}%20Total:%20$${total}`
    //returns the url 
    showTotal= total;
    return waMsj;   

  }


    return (
      <div className={style.trolley}>
           <div>
              {/* <input >Ingrese su nombre:  </input> */}
              <div className='TotalPriceContainer'>
                        <p className='TotalAmount'>Total de su pedido: {showTotal}</p>
              </div>
              <p>Total de su pedido: $</p>
              <a href={waString()} className='WhatsappContainer'>
                    <img src={Whatsapp} alt='Whatsapp' className='Whatsapp' />
                    <p className='Enviar'>Enviar</p>
                </a>
           </div>
           {cart.map((item, index) => (
            <ProductCart key={index} removeProduct={removeProduct} reduction={reduction} increase={increase} openModal={openModal} data={item}/>
               ))} 

            <button onClick={removeAll}>Limpiar Carrito</button>       
      </div>
    );



}
  
export default Trolley;
  