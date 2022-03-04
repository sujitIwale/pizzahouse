import { SET_PRODUCTS, SET_SELECTED_PRODUCT } from './productsTypes';

const initialState = {
	products: [],
	selectedProduct: null,
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: action.payload,
			};
		}
		case SET_SELECTED_PRODUCT: {
			return {
				...state,
				selectedProduct: action.payload,
			};
		}
		default:
			return state;
	}
};
