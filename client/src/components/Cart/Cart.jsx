import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePrduct } from '../../redux/cart/cartActions';
import styles from './Cart.module.css';

const Cart = () => {
	const { cart, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const removeItem = (i) => {
		dispatch(removePrduct(i));
	};
	return (
		<aside className={`${styles.cart_container} cart-section`}>
			<h3 className={styles.header}>Cart</h3>
			<div className={styles.cart}>
				<span>Your Items</span>
				<table className={styles.cart_items_list}>
					<tr>
						<th>Pizza Name</th>
						<th>Quantity</th>
						<th>price</th>
					</tr>
					{cart.map((item, i) => (
						<tr>
							<td>{item.pizza.name}</td>
							<td>{item.quantity}</td>
							<td>
								<i class='fa-solid fa-indian-rupee-sign'></i>{' '}
								{item.price}
							</td>
							<td
								className='pointer'
								onClick={() => removeItem(i)}>
								<i class='fa-solid fa-trash'></i>
							</td>
						</tr>
					))}
				</table>
			</div>
			<div className={styles.cart_footer}>
				<span>Total : </span>
				<span>
					<i class='fa-solid fa-indian-rupee-sign'></i> {total}{' '}
				</span>
			</div>
			<button className={styles.cart_order_btn}>Order Now</button>
		</aside>
	);
};

export default Cart;
