import {
	SET_PRODUCTS,
	SET_SELECTED_PRODUCT,
	SET_FILTERED_PRODUCTS,
	SET_FILTERED_BY,
	SET_LOADING,
} from './productsTypes';

const initialState = {
	products: [],
	loading: false,
	selectedProduct: null,
	filteredBy: 'all',
	filteredProducts: [],
	filtering: false,
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING: {
			return {
				...state,
				loading: action.payload,
			};
		}
		case SET_PRODUCTS: {
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		}
		case SET_FILTERED_BY: {
			return {
				...state,
				filteredBy: action.payload,
				filtering: action.payload === 'all' ? false : true,
			};
		}
		case SET_FILTERED_PRODUCTS: {
			let results = [];

			if (action.payload === 'phtol') {
				results = [...state.products];
				results.sort((a, b) => {
					return a.price < b.price ? 1 : -1;
				});
			} else if (action.payload === 'pltoh') {
				results = [...state.products];
				results.sort((a, b) => {
					return a.price > b.price ? 1 : -1;
				});
			} else if (action.payload === 'rhtol') {
				results = [...state.products];
				results.sort((a, b) => {
					return a.rating < b.rating ? 1 : -1;
				});
			} else if (action.payload === 'rltoh') {
				results = [...state.products];
				results.sort((a, b) => {
					return a.rating > b.rating ? 1 : -1;
				});
			}

			if (action.payload === 'veg') {
				results = state.products.filter((item) => item.isVeg);
			}
			if (action.payload === 'non-veg') {
				results = state.products.filter((item) => !item.isVeg);
			}
			return {
				...state,
				filteredProducts: results,
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
