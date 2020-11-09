import React from 'react';
import './items.css';
export const Item = (props) => {
	let wishListColor = 'black';
	if (props.item.wishlist) {
		wishListColor = 'red';
	}
	return (
		<div className="item">
			<img src="" alt="buying" />
			<h2>Name: {props.item.Name} </h2>
			<h4>Description: {props.item.Description} </h4>
			<h4>Price: {props.item.Price} </h4>
			<h5>Location: {props.item.Location} </h5>
			<h5>Rating: {props.item.Rating} </h5>
			<h5>DatePosted: {props.item.DatePosted} </h5>
			<div className="itemBtnContainer">
				<button onClick={() => props.addItemsToShoppingCart(props.item)}>
					<i className="fas fa-cart-arrow-down" />
				</button>
				<button
					style={{
						color: `${wishListColor}`
					}}
					onClick={()=>props.addItemsToWishList(props.item)}
				>
					<i className="fas fa-heart" />
				</button>
			</div>
		</div>
	);
};

export default Item;
