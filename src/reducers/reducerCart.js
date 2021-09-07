import {TYPES} from '../actions/actionCart.js';
import list from '../components/DataBase/products.json'

export const stateInitial = {
    products:list,
    cart:[]

}

export function reducerCart (state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(
                (product) => product.id === action.payload);

            let itemInCart = state.cart.find((item) => item.id === newItem.id);
            // console.log(newItem)

            return {...state,
                cart:[...state.cart,{...newItem, quantity: 1}], 
            };
            
            // return itemInCart? 
            // {
            //     ...state,
            //     cart:state.cart.map((item) => 
            //         item.id === newItem.id 
            //         ?{...item, quantity:item.quantity + 1}
            //         :item
            //     ),
            // }
            // :{
            //     ...state,
            //     cart:[...state.cart,{...newItem, quantity: 1}], 
            // };
        }    
        
        case TYPES.REMOVE_ONE_FROM_CART:
            return 

        case TYPES.REMOVE_ALL_FROM_CART:{

        }
             

        case TYPES.CLEAR_CART:
            return stateInitial;

        default:
            return state
    
    }
}