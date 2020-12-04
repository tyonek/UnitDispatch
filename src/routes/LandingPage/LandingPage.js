import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import Item from '../../component/items/items';
import './LandingPage.css';
export default class LandingPage extends Component {

	render() {
		return (
			<div>
				<Header />
				<h2> Welcome </h2>
				<div className="itemsToBeBought">
				{this.props.items.map((item,i)=><Item key={i} item={item} addItemsToWishList={this.props.addItemsToWishList} addItemsToShoppingCart={this.props.addItemsToShoppingCart}/>)}	
				</div>
			</div>
		);
	}
}
