import { apiUrl } from '../../utils/apiEndpoints';
import {
	SET_FILTERED_BY,
	SET_FILTERED_PRODUCTS,
	SET_LOADING,
	SET_PRODUCTS,
	SET_SELECTED_PRODUCT,
} from './productsTypes';

export const fetchProducts = () => (dispatch) => {
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setPrducts(data));
		});
};

export const setLoading = (val) => ({ type: SET_LOADING, payload: val });

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
