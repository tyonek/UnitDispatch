import React from 'react';
import Header from '../../component/header/header';
import ShoppingItem from '../../component/shoppingItem/shoppingItem'
import './shoppingCart.css';
export const ShoppingCart = (props) => {
    
	return (
		<div>
			<Header />
			<div className="shoppingCartItemsContainer">
            {
                props.shoppingCart.map((item)=><ShoppingItem item={item}/>)
            }
                 
			</div>
		</div>
	);
};

export default ShoppingCart;
