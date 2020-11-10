import React, { useState } from 'react';
import './shoppingItem.css';
export const ShoppingItem = (props) => {
	const [ reMoveModal, showRemoveModal ] = useState(false);

	return (
		<div>
			<div className="shoppingItem">
				<img src="" alt="selling" />
				<div>
					<h2>{props.item.Name}</h2>
					<h4> Description </h4>
					<h5>Date Posted </h5>
				</div>
				<h4>
					Price <br /> {props.item.quantity}
				</h4>
				<div>
					<button onClick={() => showRemoveModal(true)}>Remove</button>
					{reMoveModal ? (
						<div className= "reMoveModal">
							<input id="qtyToBeRemoved"/>
							<button onClick={() => {showRemoveModal(false)
								props.RemoveItemsFromShoppingCart(props.item,document.querySelector('#qtyToBeRemoved').value)
							}}>Remove</button>
						</div>
					) : (
						<div />
					)}
				</div>
			</div>

			<hr />
		</div>
	);
};

export default ShoppingItem;
