import { ADD_PRODUCTS, REMOVE_PRODUCT } from './cartTypes';

export const addPrducts = (products) => ({
	type: ADD_PRODUCTS,
	payload: products,
});
export const removePrduct = (id) => ({
	type: REMOVE_PRODUCT,
	payload: id,
});
