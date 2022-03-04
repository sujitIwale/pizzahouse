import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';

const Cart = () => {
	const cart = useSelector((state) => state.cart.cart);

	return (
		<aside className={`${styles.cart_container} cart-section`}>
			<h3 className={styles.header}>Cart</h3>
			<div className={styles.cart}>
				<span>Your Items</span>
				<ul className={styles.cart_items_list}>
					{cart.map((item) => (
						<li>
							<h3>Item1</h3>
							<span>
								<i class='fa-solid fa-indian-rupee-sign'></i>{' '}
								333
							</span>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Cart;
