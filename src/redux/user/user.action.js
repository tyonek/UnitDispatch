export const setCurrentUser = (user) => ({
	type: 'SET_CURRENT_USER',
	payload: user
});
export const setCurrentUserShoppingCart = (userShoppingCart) => {
	return {
		type: 'SET_CURRENT_USER_CART',
		payload: userShoppingCart
	};
};
export const setCurrentUserWishList = (userWishList) => ({
	type: 'SET_CURRENT_USER_WISHLIST',
	payload: userWishList
});
