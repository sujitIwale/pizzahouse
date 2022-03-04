import { combineReducers, createStore } from 'redux';
import { cartReducer } from './cart/cartReducer';
import { productsReducer } from './products/productsReducer';

const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
