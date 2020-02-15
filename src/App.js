import React from 'react';
import './App.css';
import {HomePage} from './components/homepage/homepage.component' 
import Shop from './shop/shop.component'
import { Switch, Route } from 'react-router-dom';
import Header from './header/header.component';


function App() {
  return (
    <div className="App"> 
    <Header />
     <Switch> 
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={Shop} /> 
     </Switch>
    </div>
  );
}
export default App;
