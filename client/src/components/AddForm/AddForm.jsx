import React, { useState } from 'react';
import { addPrducts, editProduct } from '../../redux/cart/cartActions';
import styles from './AddForm.module.css';

const AddForm = ({
	product,
	dispatch,
	closeModal,
	itemIndex,
	cartItem,
	type,
}) => {
	const [Item, setItem] = useState({
		pizza: product,
		quantity: cartItem ? cartItem.quantity : 1,
		price: product.price,
		toppings: cartItem ? cartItem.toppings : [],
		size: cartItem ? cartItem.size : 'Regular',
		total: cartItem ? cartItem.total : product.price,
	});
	const inputChangeHandler = (e) => {
		if (e.target.name === 'toppings' && e.target.type === 'checkbox') {
			const found = Item.toppings.includes(e.target.value);
			if (e.target.checked && !found) {
				Item.toppings.push(e.target.value);
				setItem({ ...Item });
			} else {
				setItem({
					...Item,
					[e.target.name]: Item.toppings.filter(
						(item) => item !== e.target.value
					),
				});
			}
		} else setItem({ ...Item, [e.target.name]: e.target.value });
	};
	const changeHandler = (type) => {
		if (type === 'increase') {
			setItem({
				...Item,
				quantity: Item.quantity + 1,
				total: Item.price * (Item.quantity + 1),
			});
		} else if (type === 'decrease' && Item.quantity > 0) {
			setItem({
				...Item,
				quantity: Item.quantity - 1,
				total: Item.price * (Item.quantity - 1),
			});
		}
	};
	const addToCartHandler = () => {
		console.log('hello');
		if (type === 'edit') {
			dispatch(editProduct({ product: Item, productIndex: itemIndex }));
		} else {
			dispatch(addPrducts(Item));
		}
		closeModal();
	};
	return (
		<div className={styles.form_container}>
			<div className={styles.form_details}>
				<div className='flex row spc-btw'>
					<p>{product.description}</p>
					<span>
						<i className='fa-solid fa-indian-rupee-sign'></i>{' '}
						{/* {product.price} */}
						{product.price}
					</span>
				</div>
				<span>{product.size[0].title}</span>
				<div className={styles.pizza_size_radio_group}>
					{product.size[0].items.map((item, i) => (
						<div className={styles.radio_btn} key={i}>
							{product.size[0].isRadio ? (
								<input
									type='radio'
									id='size'
									name='size'
									value={item.size}
									checked={
										item.size === Item.size ? true : false
									}
									onChange={inputChangeHandler}
								/>
							) : (
								<input type='checkbox' />
							)}
							  <label>{item.size}</label>
							<br></br>
						</div>
					))}
				</div>

				<span>{product.toppings[0].title}</span>
				<div className={styles.pizza_size_radio_group}>
					{product.toppings[0].items.map((item, i) => (
						<div className={styles.radio_btn} key={i}>
							{product.toppings[0].isRadio ? (
								<input
									type='radio'
									id='name'
									onChange={inputChangeHandler}
									name='toppings'
									value={item.name}
									checked={
										Array.isArray(Item.toppings) &&
										Item.toppings.find(
											(el) => el === item.name
										)
											? true
											: Item.toppings === item.name
											? true
											: false
									}
								/>
							) : (
								<input
									type='checkbox'
									name='toppings'
									checked={
										Array.isArray(Item.toppings) &&
										Item.toppings.find(
											(el) => el === item.name
										)
											? true
											: false
									}
									onChange={inputChangeHandler}
									value={item.name}
								/>
							)}
							  <label>{item.name}</label>
							<br></br>
						</div>
					))}
				</div>
			</div>
			<footer className={styles.form_footer}>
				<span>
					<i className='fa-solid fa-indian-rupee-sign'></i>{' '}
					{/* {product.price} */}
					{Item.total}
				</span>
				<div className={`${styles.control} `}>
					<div
						className={`${styles.control} control btn-secondary btn-red`}>
						<i
							className='fa-solid fa-minus'
							onClick={() => changeHandler('decrease')}></i>
						<h3>{Item.quantity}</h3>
						<i
							className='fa-solid fa-plus'
							onClick={() => changeHandler('increase')}></i>
					</div>
					<button
						disabled={Item.quantity <= 0 ? true : false}
						className={styles.add_cart}
						onClick={addToCartHandler}>
						<h4>Add To Cart</h4>
						<i className='fa-solid fa-cart-plus'></i>
					</button>
				</div>
			</footer>
		</div>
	);
};

export default AddForm;
