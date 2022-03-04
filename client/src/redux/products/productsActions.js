import { SET_PRODUCTS, SET_SELECTED_PRODUCT } from './productsTypes';

export const setPrducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});
export const setSelectedProduct = (product) => ({
	type: SET_SELECTED_PRODUCT,
	payload: product,
});
