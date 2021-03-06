import React from 'react'

import {auth} from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom' 

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'  
import {selectCartHidden, }  from '../redux/cart/cart.selectors'
import {selectCurrentUser}  from '../redux/user/user.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.component.styles.scss' 
import  CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = (({currentUser, hidden}) => (
    <div className='header'> 
            <Link className='logo-container' to='/'>
                <Logo className='logo'/> 
            </Link> 
        <div className='options'> 
            <Link className='option' to ='/shop'>
                shop
            </Link> 
            <Link className='option' to ='/shop'>
                contact
            </Link>  
            {
                currentUser ? (
                    <div className='option' onClick = {() => auth.signOut()}> sign Out </div>
                ):   (<Link className='option' to = '/signin'> sign In </Link>)
            }
            <CartIcon />
        </div>    
        { hidden ? null : <CartDropdown />}
        
    </div>
))  
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header); 