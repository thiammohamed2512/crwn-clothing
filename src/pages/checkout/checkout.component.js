import React from 'react';  
import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../components/redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'
// import CartItem from '../../components/cart-items/cart-items.component';

const CheckoutPage = ({CartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className=""> product </span>
            </div>
            <div className="header-block">
                <span className=""> description </span>
            </div>
            <div className="header-block">
                <span className=""> quantity</span>
            </div>
            <div className="header-block">
                <span className=""> price</span>
            </div>
            <div className="header-block">
                <span className=""> remove</span>
            </div>
        </div>  
        {
            CartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
         <div className="total"> 
                    <span> Total: ${total} </span>
        </div>
      
    </div>
) 
const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItems, 
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage); 