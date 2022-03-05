import { ADD_PRODUCTS, REMOVE_PRODUCT } from './cartTypes';

const initialState = {
	cart: [],
	total: 0,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCTS: {
			state.cart.push(action.payload);
			const newCart = [...state.cart];
			let total = 0;
			state.cart.forEach((item) => {
				total = item.total + total;
			});
			return {
				...state,
				cart: newCart,
				total,
			};
		}
		case REMOVE_PRODUCT: {
			state.cart.splice(action.payload, 1);
			const newCart = [...state.cart];
			let total = 0;
			state.cart.forEach((item) => {
				total = item.total + total;
			});
			return {
				...state,
				cart: newCart,
				total,
			};
		}
		default:
			return state;
	}
};
