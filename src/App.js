import React , {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component' 
import Shop from './pages/shopPage/shop.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {setCurrentUser } from './components/redux/user/user.actions'
import Header from './components/header/header.component'
import SignInSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, CreateUserProfileDocument} from './firebase/firebase.utils';
import { selectCurrentUser } from './components/redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

 class App extends Component { 
   unSuscribeFromAuth = null; 

   componentDidMount = () => { 
     const {setCurrentUser} = this.props;
     this.unSuscribeFromAut = auth.onAuthStateChanged(async userAuth => {
      
     if(userAuth) {
       const userRef = await CreateUserProfileDocument(userAuth); 
       
       userRef.onSnapshot(snapShot => {
           setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
       }); 
     } 
     setCurrentUser(userAuth); 
    })
  } 
  componentWillUnmount  = () => {
    if(this.unSuscribeFromAuth) this.unSuscribeFromAuth();  
  }
  render() {
    return (
    <div className="App"> 
      <Header />
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} /> 
        <Route exact path='/checkout' component={CheckoutPage} /> 
        <Route exact path='/signin' render={() => 
          this.props.currentUser 
          ? (<Redirect to = '/'/>) 
          :(<SignInSignUp />)   } 
        />  
      </Switch>
    </div>
    )
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispacthToProps = dispacth => ({
  setCurrentUser: user => dispacth(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispacthToProps) (App);
