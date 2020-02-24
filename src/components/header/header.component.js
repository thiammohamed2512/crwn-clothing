import React from 'react'
import {auth} from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom' 
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.component.styles.scss' 

const Header = (({currentUser}) => (
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
        </div>   
    </div>
))  
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps) (Header);