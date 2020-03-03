import CartActionsTypes from './cart.types' 
import { addItemToCart} from './cart.utils'
// import { addItem } from './cart.actions'

const INITIAL_STATE = {
    hidden : true, 
    cartItems: []
}  

const CartReducer = (state = INITIAL_STATE, action ) => {
    console.log('moi544');
    
    switch (action.type) {
        case CartActionsTypes.TOGGLE_CART_HIDDEN:
          return {
              ...state,
              hidden: !state.hidden
          } 
        case CartActionsTypes.ADD_ITEM: 
          return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload)   
          }
        default:
        return state
    }
}
export default CartReducer;