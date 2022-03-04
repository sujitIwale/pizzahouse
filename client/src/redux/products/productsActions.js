import { SET_PRODUCTS } from './productsTypes';

export const setPrducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});
