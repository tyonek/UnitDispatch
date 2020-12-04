import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser,setCurrentUserShoppingCart,setCurrentUserWishList } from './redux/user/user.action';
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
import WishList from './routes/wishList/wishList';


import ReactS3 from 'react-s3';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends Component {
	constructor() {
		super();

		this.state = {
			items: [
				{
					id: 1,
					Name: 'Name',
					Description: 'Description',
					Price: 'Price',
					Location: 'Location',
					Rating: 'Rating',
					wishlist: false,
					DatePosted: 'DatePosted',
					quantity: 0
				},
				{
					id: 2,
					Name: 'Name',
					Description: 'Description',
					Price: 'Price',
					Location: 'Location',
					Rating: 'Rating',
					wishlist: false,
					DatePosted: 'DatePosted',
					quantity: 0
				},
				{
					id: 3,
					Name: 'Name',
					Description: 'Description',
					Price: 'Price',
					Location: 'Location',
					Rating: 'Rating',
					wishlist: false,
					DatePosted: 'DatePosted',
					quantity: 0
				}
			]
		};
	}

	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});
			} else {
				setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	addItemsToShoppingCart = (item) => {
		let currentShoppingCart = [...this.props.shoppingCart];

		currentShoppingCart.map((shoppingListItems) => {
			if (item.id === shoppingListItems.id) {
				shoppingListItems.quantity = shoppingListItems.quantity + 1;
			}
		});
		if (item.quantity === 0) {
			item.quantity = 1;
			currentShoppingCart.push(item);
		}
		this.props.setShoppingCart(currentShoppingCart );
		console.log(this.props.shoppingCart);
		
	};
	addItemsToWishList = (item) => {
		console.log(item.wishlist);
		if (item.wishlist === true) {
			let wishList = this.props.wishList.filter((wishedItem) => wishedItem.id !== item.id);
			item.wishlist = false;
			this.props.setWishList(wishList);
			this.setState({item: item });
		} else {
			let wishList = [...this.props.wishList];
			item.wishlist = true;
			wishList.push(item);

			this.props.setWishList(wishList);
			this.setState({ wishList: wishList, item: item });
		}
	};

	RemoveItemsFromShoppingCart = (item, qty) => {
		let currentShoppingCart = this.state.shoppingCart;
		currentShoppingCart = currentShoppingCart.filter((shoppingItem) => {
			if (shoppingItem.id === item.id) {
				if (shoppingItem.quantity > qty) {
					shoppingItem.quantity = shoppingItem.quantity - qty;
					if (shoppingItem.quantity === 0) {
						return shoppingItem.id !== item.id;
					}
				} else {
					shoppingItem.quantity = 0;
					return shoppingItem.id !== item.id;
				}
			}
			return shoppingItem;
		});

		this.setState({ shoppingCart: currentShoppingCart });
	};

	addNewProductToSell = (item) => {
		let currentItem = this.state.items;
		currentItem.push(item);
		this.setState({ item: currentItem });
	};

	uploadFile = (e) => {
		const file = e.target.files[0];

		ReactS3.uploadFile(file, this.config).then((data) => console.log(data)).catch((err) => console.error(err));
	};
	render() {
		
		return (
			<div>
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
					<Route
						path={'/signup'}
						component={(props) => <SignUp {...props} currentUser={this.state.currentUser} />}
					/>
					<Route
						exact
						path={'/login'}
						render={(props) =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<Login currentUsers={this.state.currentUser} {...props} />
							)}
					/>
					<Route path={'/standard'} compomnent={Standard} />
					<Route path={'/transporter'} component={Transporter} />
					<Route
						path={'/sell'}
						component={() => (
							<Sell uploadFile={this.uploadFile} addNewProductToSell={this.addNewProductToSell} />
						)}
					/>
					<Route path={'/selling'} component={Selling} />
					<Route path={'/orders'} component={Orders} />
					<Route
						path={'/wishlist'}
						component={() => (
							<WishList wishList={this.state.wishList} addItemsToWishList={this.addItemsToWishList} />
						)}
					/>
					<Route
						path={'/shoppingcart'}
						component={() => (
							<ShoppingCart
								shoppingCart={this.state.shoppingCart}
								RemoveItemsFromShoppingCart={this.RemoveItemsFromShoppingCart}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setShoppingCart: (shoppingCart) => dispatch(setCurrentUserShoppingCart(shoppingCart)),
	setWishList:(wishList)=>dispatch(setCurrentUserWishList(wishList))
});

const mapStateProps = ({ user }) =>{
	console.log(user)
	return({
	currentUser: user.currentUser,
	shoppingCart: user.shoppingCart,
	wishList:user.wishList
})};

export default connect(mapStateProps, mapDispatchToProps)(App);
