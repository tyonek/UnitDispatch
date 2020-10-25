import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header/header';
import './App.css';
import LandingPage from './routes/LandingPage/LandingPage';
import HowToSell from './routes/AccountInfo/HowToSell/HowToSell';
import HowToBuy from './routes/AccountInfo/HowToBuy/HowToBuy';
import HowtoTransport from './routes/AccountInfo/HowToTransport/HowToTransport';
import SignUp from './routes/Signup/Signup';
import Login from './routes/Login/Login';
import Standard from './routes/UserAccounts/Standard/Standard';
import Transporter from './routes/UserAccounts/Transporter/Transporter';
import Sell from './routes/sell/sell';
import Selling from './routes/selling/selling';
import Orders from './routes/Orders/Orders';
export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path={'/'} component={LandingPage} />
					<Route path={'/howtosell'} component={HowToSell} />
					<Route path={'/howtobuy'} component={HowToBuy} />
					<Route path={'/howtotransport'} component={HowtoTransport} />
					<Route path={'/signup'} component={SignUp} />
					<Route path={'/login'} component={Login} />
					<Route path={'/standard'} compomnent={Standard} />
					<Route path={'/transporter'} component={Transporter} />
					<Route path={'/sell'} component={Sell} />
					<Route path={'/selling'} component={Selling} />
					<Route path={'/orders'} component={Orders} />
				</Switch>
			</div>
		);
	}
}
