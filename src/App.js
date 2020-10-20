import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage';
import HowBroker from './routes/AccountInfo/HowDealer/HowDealer';
import HowDealer from './routes/AccountInfo/HowBroker/HowBroker';
import HowTransporter from './routes/AccountInfo/HowTransporter/HowTransporter';
import SignUp from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Dealer from './routes/UserAccounts/Dealer/Dealer';
import Broker from './routes/UserAccounts/Broker/Broker';
import Transporter from './routes/UserAccounts/Transporter/Transporter';
export default class App extends Component{
 render(){
   return(
     <div>
       <Switch>
         <Route exact path={'/'} component={LandingPage}></Route>
         <Route path={'/howdealer'} component={HowDealer}></Route>
         <Route path={'/howbroker'} component={HowBroker}></Route>
         <Route path={'/howtransporter'} component={HowTransporter}></Route>
         <Route path={'/signup'} component={SignUp}></Route>
         <Route path={'/login'} component={Login}></Route>
         <Route path={'/dealer'} compomnent={Dealer}></Route>
         <Route path={'/broker'} component={Broker}></Route>
         <Route path={'/transporter'} component={Transporter}></Route>
       </Switch>
     </div>
   )
 }
};
