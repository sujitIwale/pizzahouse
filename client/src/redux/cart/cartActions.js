import { ADD_PRODUCTS, EDIT_PRODUCT, REMOVE_PRODUCT } from './cartTypes';

export const addPrducts = (products) => ({
	type: ADD_PRODUCTS,
	payload: products,
});
export const removePrduct = (id) => ({
	type: REMOVE_PRODUCT,
	payload: id,
});
export const editProduct = (payload) => ({
	type: EDIT_PRODUCT,
	payload,
});
