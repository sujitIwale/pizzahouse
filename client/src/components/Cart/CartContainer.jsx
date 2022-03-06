import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddForm from '../AddForm/AddForm';
import Modal from '../Modal/Modal';
import Cart from './Cart';
import styles from './Cart.module.css';
import CartButton from './CartButton';

const CartContainer = () => {
	const { cart, total } = useSelector((state) => state.cart);
	const [OpenModal, setOpenModal] = useState(false);
	const [EditItem, setEditItem] = useState(null);
	const [CartModal, setCartModal] = useState({
		mobile: false,
		openModal: false,
	});
	const dispatch = useDispatch();

	const openEditModal = (product, i) => {
		setEditItem(product);
		setOpenModal(true);
	};
	useEffect(() => {
		if (window.innerWidth <= 750) {
			setCartModal((state) => ({ ...state, mobile: true }));
		}
	}, []);
	useLayoutEffect(() => {
		window.addEventListener('resize', (e) => {
			if (e.target.innerWidth <= 750) {
				setCartModal((state) => ({ ...state, mobile: true }));
			} else {
				setCartModal((state) => ({ openModal: false, mobile: false }));
			}
		});
		return () => window.removeEventListener('resize');
	}, []);

	return (
		<Fragment>
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
			{!CartModal.mobile ? (
				<aside className={`${styles.cart_container} cart-section`}>
					<h3 className={styles.header}>Cart</h3>
					<Cart
						openEditModal={openEditModal}
						cart={cart}
						total={total}
					/>
				</aside>
			) : CartModal.openModal ? (
				<Modal
					closeModal={() =>
						setCartModal((state) => ({
							...state,
							openModal: false,
						}))
					}
					modalTitle='Cart'>
					<Cart
						openEditModal={openEditModal}
						cart={cart}
						total={total}
					/>
				</Modal>
			) : null}
			<CartButton onClick={setCartModal} count={cart.length} />
		</Fragment>
	);
};

export default CartContainer;
