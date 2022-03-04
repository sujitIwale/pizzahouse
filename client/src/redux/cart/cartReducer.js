import { ADD_PRODUCTS } from './cartTypes';

const initialState = {
	cart: [],
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCTS: {
			return {
				...state,
				cart: state.cart.push(action.payload),
			};
		}
		default:
			return state;
	}
};
