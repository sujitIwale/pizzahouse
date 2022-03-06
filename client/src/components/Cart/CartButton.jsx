import React from 'react';

const CartButton = ({ onClick, count }) => {
	return (
		<div
			className='cart-btn-container'
			onClick={() =>
				onClick((state) => ({
					...state,
					openModal: !state.openModal,
				}))
			}>
			<span className='cart-item-count'>{count}</span>
			<div className='cart-btn'>
				<i className='fa-solid fa-cart-plus'></i>
			</div>
		</div>
	);
};

export default CartButton;
