import {
	SET_PRODUCTS,
	SET_SELECTED_PRODUCT,
	SET_FILTERED_PRODUCTS,
	SET_FILTERED_BY,
} from './productsTypes';

const initialState = {
	products: [],
	selectedProduct: null,
	filteredProducts: [],
	filteredBy: 'all',
};

const compare = (a, b) => {};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: action.payload,
			};
		}
		case SET_FILTERED_BY: {
			return {
				...state,
				filteredBy: action.payload,
			};
		}
		case SET_FILTERED_PRODUCTS: {
			let results;
			if (state.filteredBy === 'phtol') {
				results = [...state.products];
				results.sort();
			}
			return {
				...state,
				filteredProducts: action.payload,
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
