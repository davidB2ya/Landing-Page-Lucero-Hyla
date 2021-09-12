import React, { Component } from 'react';
import list from '../DataBase/products.json';

export const AppContext = React.createContext();

export class AppProvider extends Component {


    state = {
        products: list,
        cart: [],
        total: 0,
        open: false,
    }

    addCart = (_id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== _id
        })
        if(check){
        const data = products.filter(product =>{
                return product.id === _id 
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("El producto ha sido añadido al carrito.")
        }
        
    };
    
    reduction = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = _id =>{
        if(window.confirm("¿Quieres eliminar este producto?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.id === _id){
                    cart.splice(index, 1); 
                    item.count >= 1 ? item.count = 1 : item.count =1;
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    };
   
    removeAll = ()=> {
        const{cart} = this.state;
        if(window.confirm("¿Desea Borrar Todo el Carrito?")){            
            cart.forEach((item) =>{
                if(item.id !== 1){ 
                    item.count >= 1 ? item.count = 1 : item.count =1;
                }
            })
            this.setState({cart: cart});
        this.setState({cart:[]});
        this.setState({total: 0});
        
        }
            
    }
    
    openModal = (_id) =>{
        this.setState({open: !this.state.open})
        
    }

    render() {
        const {products, cart,total, open} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,removeAll,openModal} = this;
        return (
            <AppContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,removeAll,open,openModal}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }


};

