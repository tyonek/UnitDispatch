import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import Item from '../../component/items/items';
import './LandingPage.css';
export default class LandingPage extends Component {
	state = {
		items: [
			{
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				DatePosted: 'DatePosted'
			},
			{
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				DatePosted: 'DatePosted'
			},
			{
				Name: 'Name',
				Description: 'Description',
				Price: 'Price',
				Location: 'Location',
				Rating: 'Rating',
				DatePosted: 'DatePosted'
			}
		]
	};
	render() {
		return (
			<div>
				<Header />
				<h2> Welcome </h2>
				<div className="itemsToBeBought">
				{this.state.items.map((item)=><Item item={item} addItemsToShoppingCart={this.props.addItemsToShoppingCart}/>)}	
				</div>
			</div>
		);
	}
}
