import React , {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component' 
import Shop from './pages/shopPage/shop.component'
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

 class App extends Component { 
   constructor(){
     super(); 

     this.state = {
       currrentUser : null
     }
   } 
   unSuscribeFromAuth = null; 
   componentDidMount = () => { 
     auth.onAuthStateChanged( user => {
      this.setState({ currrentUser : user})  
      console.log(user);
      });   
  } 
  componentWillUnmount  = () => {
    this.unSuscribeFromAuth(); 
  }
  render() {
    return (
    <div className="App"> 
      <Header currrentUser={this.state.currrentUser} />
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} /> 
        <Route path='/signin' component={SignInSignUp} />  
      </Switch>
    </div>
    )
  }
}
export default App;
