import React from 'react';
import './shoppingItem.css';
export const ShoppingItem = (props) => (
    <div>
        <div className="shoppingItem">
		<img src="" alt="selling" />
		<div>
			<h2>Name of the Item </h2>
			<h4> Description </h4>
			<h5>Date Posted </h5>
		</div>
		<h4>Price </h4>
		<button> Remove </button>
	</div>
    <hr />
    </div>
	
);

export default ShoppingItem;
