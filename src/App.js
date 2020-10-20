import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

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
}

export default App;
