import React from 'react' 
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect' 
import {selectCartItems} from '../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-buttom.component' 
import CartItem from '../cart-items/cart-items.component' 
import {withRouter} from 'react-router-dom'
import {ToggleCartHidden} from '../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
  const CartDropdown = ({cartItems, history, dispatch}) => 
    (<div className="cart-dropdown"> 
        <div className="cart-items">
          {
            cartItems.length ? 
            cartItems.map(cartItem =>  (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message'> your cart is empty </span>
          }
        </div>   
        <CustomButton onClick={ () => {
           history.push('./checkout');
           dispatch(ToggleCartHidden())
          }}
        >
           CheckOut 
        </CustomButton>   
       </div>
    )
    
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default  withRouter(connect(mapStateToProps)(CartDropdown));