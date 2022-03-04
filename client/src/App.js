import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='main-section'>
				<ProductList />
				<Cart />
			</main>
		</div>
	);
};

export default App;
