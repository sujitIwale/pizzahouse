import React from 'react';
import './App.css';
import Cart from './components/Cart/CartContainer';
import Footer from './components/Footer/Footer';
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
			{/* <CartButton /> */}
			<Footer />
		</div>
	);
};

export default App;
