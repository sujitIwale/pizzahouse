import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { removePrduct } from '../../redux/cart/cartActions';
import styles from './Cart.module.css';

const Cart = ({ openEditModal, cart, total }) => {
	const dispatch = useDispatch();
	const removeItem = (i) => {
		dispatch(removePrduct(i));
	};
	return (
		<Fragment>
			<div className={styles.cart}>
				<span>Your Items</span>
				<table className={styles.cart_items_list}>
					<tr>
						<th>Pizza Name</th>
						<th>Quantity</th>
						<th>price</th>
					</tr>
					{cart.map((item, i) => (
						<tr key={i}>
							<td className={styles.pizza_name_column}>
								<div>{item.pizza.name}</div>
								<div className='flex row '>
									<h4>Size:</h4> {item.size}
								</div>
								<div>
									<h4>Toppings :</h4>
									<div>
										{!Array.isArray(item.toppings)
											? item.toppings
												? item.toppings
												: ''
											: item.toppings.map((t, k) => (
													<span key={k}> {t} </span>
											  ))}
									</div>
								</div>
							</td>
							<td>{item.quantity}</td>
							<td>
								<i className='fa-solid fa-indian-rupee-sign'></i>{' '}
								{item.price}
							</td>
							<td
								className='pointer'
								onClick={() => removeItem(i)}>
								<i className='fa-solid fa-trash'></i>
							</td>
							<td
								className='pointer'
								onClick={() => openEditModal(item, i)}>
								<i className='fa-solid fa-pen'></i>
							</td>
						</tr>
					))}
				</table>
			</div>
			<div className={styles.cart_footer}>
				<span>Total : </span>
				<span>
					<i className='fa-solid fa-indian-rupee-sign'></i> {total}{' '}
				</span>
			</div>
			<button className={styles.cart_order_btn}>Order Now</button>
		</Fragment>
	);
};

export default Cart;
