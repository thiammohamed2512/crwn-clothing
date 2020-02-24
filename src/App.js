import React , {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component' 
import Shop from './pages/shopPage/shop.component'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux' 
import {setCurrentUser } from './components/redux/user/user.actions'
import Header from './components/header/header.component';
import SignInSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, CreateUserProfileDocument} from './firebase/firebase.utils';

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
    this.unSuscribeFromAuth();  
  }
  render() {
    return (
    <div className="App"> 
      <Header />
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} /> 
        <Route path='/signin' component={SignInSignUp} />  
      </Switch>
    </div>
    )
  } 
} 
const mapDispacthToProps = dispacth => ({
  setCurrentUser: user => dispacth(setCurrentUser(user))
})
export default connect(null,mapDispacthToProps) (App);
