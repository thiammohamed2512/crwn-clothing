import React from 'react';  
import {connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {selectCartItems, selectCartTotal} from '../../components/redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'

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
         <div className="total"> Total: ${total} </div>  
            <div className='test-warning'> 
                *please use the following test credit card for payments* 
                <br /> 
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}/>
    </div>
) 

const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItems, 
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage); 