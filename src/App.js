import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage';
import HowToSell from './routes/AccountInfo/HowToSell/HowToSell';
import HowToBuy from './routes/AccountInfo/HowToBuy/HowToBuy';
import HowtoTransport from './routes/AccountInfo/HowToTransport/HowToTransport';
import SignUp from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Seller from './routes/UserAccounts/Seller/Seller';
import Buyer from './routes/UserAccounts/Buyer/Buyer';
import Transporter from './routes/UserAccounts/Transporter/Transporter'; 
export default class App extends Component{
 render(){
   return(
     <div>
       <Switch>
         <Route exact path={'/'} component={LandingPage}></Route>
         <Route path={'/howtosell'} component={HowToSell}></Route>
         <Route path={'/howtobuy'} component={HowToBuy}></Route>
         <Route path={'/howtotransport'} component={HowtoTransport}></Route>
         <Route path={'/signup'} component={SignUp}></Route>
         <Route path={'/login'} component={Login}></Route>
         <Route path={'/seller'} compomnent={Seller}></Route>
         <Route path={'/buyer'} component={Buyer}></Route>
         <Route path={'/transporter'} component={Transporter}></Route>
       </Switch>
     </div>
   )
 }
};
