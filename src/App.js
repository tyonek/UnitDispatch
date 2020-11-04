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
import Sell from './routes/sell/sell';
import Selling from './routes/selling/selling';
import Orders from './routes/Orders/Orders';
import ShoppingCart from './routes/shoppingCart/shoppingCart';
import Context from './context';
export default class App extends Component {
	state = {
		shoppingCart: [],
		wishList: []
	};

	addItemsToShoppingCart = (item) => {
		let currentShoppingCart = this.state.shoppingCart;
		currentShoppingCart.push(item);
		this.setState({ shoppingCart: currentShoppingCart });
		console.log(this.state.shoppingCart);
	};
	render() {
		const value = {
			shoppingListCounter: this.state.shoppingCart.length
		};
		return (
			<div>
				<Context.Provider value={value}>
					<Switch>
						<Route
							exact
							path={'/'}
							component={() => <LandingPage addItemsToShoppingCart={this.addItemsToShoppingCart} />}
						/>
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
						<Route
							path={'/shoppingcart'}
							component={() => <ShoppingCart shoppingCart={this.state.shoppingCart} />}
						/>
					</Switch>
				</Context.Provider>
			</div>
		);
	}
}
