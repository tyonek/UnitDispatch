const Initial_state = {
	currentUser: null,
	shoppingCart: [],
	wishList: []
};

const userReducer = (state = Initial_state, action) => {

	switch (action.type) {
		case 'SET_CURRENT_USER_CART':
			return {
				...state,
				shoppingCart: action.payload
			};
		case 'SET_CURRENT_USER':
			return {
				...state,
				currentUser: action.payload
			};

		case 'SET_CURRENT_USER_WISHLIST':
			return {
				...state,
				wishList: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
