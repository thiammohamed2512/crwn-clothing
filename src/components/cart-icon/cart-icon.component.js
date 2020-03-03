import React from 'react'  
import {ToggleCartHidden} from '../redux/cart/cart.actions' 
import { connect } from 'react-redux' 
import {createStructuredSelector} from 'reselect' 
import {selectCartItemsCount} from '../redux/cart/cart.selectors'
import {ReactComponent as ShoppingIcon } from '../../assets/shoppingIcon.svg'

import './cart-icon.styles.scss' 

 const CartIcon = ({ToggleCartHidden, itemCount}) => 
   ( <div className="cart-icon" onClick={ToggleCartHidden}>  
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount}</span> 
     </div>
    ) 

    const mapDispatchToProps = dispatch => ({
      ToggleCartHidden : () => dispatch(ToggleCartHidden())
    }) 

    const mapStateToProps = createStructuredSelector({
      itemCount: selectCartItemsCount
    })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);