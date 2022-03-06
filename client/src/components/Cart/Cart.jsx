import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePrduct } from '../../redux/cart/cartActions';
import AddForm from '../AddForm/AddForm';
import Modal from '../Modal/Modal';
import styles from './Cart.module.css';

const Cart = () => {
	const [OpenModal, setOpenModal] = useState(false);
	const [EditItem, setEditItem] = useState(null);
	const { cart, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const removeItem = (i) => {
		dispatch(removePrduct(i));
	};
	const openEditModal = (product, i) => {
		setEditItem(product);
		setOpenModal(true);
	};
	return (
		<aside className={`${styles.cart_container} cart-section`}>
			{OpenModal && (
				<Modal
					closeModal={() => setOpenModal(false)}
					modalTitle={EditItem.name}>
					<AddForm
						product={EditItem.pizza}
						cartItem={EditItem}
						itemIndex={EditItem.index}
						type='edit'
						dispatch={dispatch}
						closeModal={() => setOpenModal(false)}
					/>
				</Modal>
			)}
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
											: item.toppings.map((t) => (
													<span> {t} </span>
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
		</aside>
	);
};

export default Cart;
