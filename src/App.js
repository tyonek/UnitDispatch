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
import WishList from './routes/wishList/wishList'
import Context from './context';
export default class App extends Component {
	state = {
		shoppingCart: [],
		wishList: [],
		items: [
			{
				id:1,
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				wishlist: false,
				DatePosted: 'DatePosted'
			},
			{
				id:2,
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				wishlist: false,
				DatePosted: 'DatePosted'
			},
			{
				id:3,
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				wishlist: false,
				DatePosted: 'DatePosted'
			}
		]
	};

	addItemsToShoppingCart = (item) => {
		let currentShoppingCart = this.state.shoppingCart;
		currentShoppingCart.push(item);
		this.setState({ shoppingCart: currentShoppingCart });
	};
	addItemsToWishList = (item) => {
		console.log(item.wishlist);
		if (item.wishlist === true) {
			let wishList = this.state.wishList.filter((wishedItem) => wishedItem.id !== item.id);
			item.wishlist = false;
			this.setState({ wishList: wishList, item: item });
		} else {
			let wishList = this.state.wishList;
			item.wishlist = true;
			wishList.push(item);
			this.setState({ wishList: wishList, item: item });
			console.log(item.wishlist);
		}
	};
	render() {
		const value = {
			shoppingListCounter: this.state.shoppingCart.length,
			items: this.state.items
		};
		console.log(this.state.wishList);
		return (
			<div>
				<Context.Provider value={value}>
					<Switch>
						<Route
							exact
							path={'/'}
							component={() => (
								<LandingPage
									addItemsToShoppingCart={this.addItemsToShoppingCart}
									addItemsToWishList={this.addItemsToWishList}
									items={this.state.items}
								/>
							)}
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
						<Route path={'/wishlist'} component={()=><WishList wishList={this.state.wishList} addItemsToWishList={this.addItemsToWishList} />} />
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
