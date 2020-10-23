import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage';
import HowToSell from './routes/AccountInfo/HowToSell/HowToSell';
import HowToBuy from './routes/AccountInfo/HowToBuy/HowToBuy';
import HowtoTransport from './routes/AccountInfo/HowToTransport/HowToTransport';
import SignUp from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Standard from './routes/UserAccounts/Standard/Standard';
import Transporter from './routes/UserAccounts/Transporter/Transporter'; 
import Sell from './routes/sell/sell'
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
         <Route path={'/standard'} compomnent={Standard}></Route>
         <Route path={'/transporter'} component={Transporter}></Route>
         <Route path={'/sell'} component={Sell}></Route>
       </Switch>
     </div>
   )
 }
};
