import { ADD_PRODUCTS } from './cartTypes';

export const addPrducts = (products) => ({
	type: ADD_PRODUCTS,
	payload: products,
});
