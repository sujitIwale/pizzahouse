import {
	SET_FILTERED_BY,
	SET_FILTERED_PRODUCTS,
	SET_PRODUCTS,
	SET_SELECTED_PRODUCT,
} from './productsTypes';

export const setPrducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});
export const setSelectedProduct = (product) => ({
	type: SET_SELECTED_PRODUCT,
	payload: product,
});
export const setFilteredBy = (filter) => ({
	type: SET_FILTERED_BY,
	payload: filter,
});
export const setFilteredProducts = (sortBy) => ({
	type: SET_FILTERED_PRODUCTS,
	payload: sortBy,
});
