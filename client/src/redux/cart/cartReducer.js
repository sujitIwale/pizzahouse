import { ADD_PRODUCTS } from './cartTypes';

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
			console.log(total);
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
