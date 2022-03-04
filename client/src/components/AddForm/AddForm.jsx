import React, { useState } from 'react';
import styles from './AddForm.module.css';

const AddForm = ({ product }) => {
	const [Item, setItem] = useState({
		pizza: product,
		quantity: 1,
		price: product.prise,
	});
	const changeHandler = (type) => {};
	return (
		<div className={styles.form_container}>
			<div className={styles.form_details}>
				<p>{product.description}</p>
				<span>{product.size[0].title}</span>
				<div className={styles.pizza_size_radio_group}>
					{product.size[0].items.map((item) => (
						<div className={styles.radio_btn}>
							{product.size[0].isRadio ? (
								<input
									type='radio'
									id='html'
									name='size'
									value={item.size}
								/>
							) : (
								<input type='checkbox' />
							)}
							  <label for='html'>{item.size}</label>
							<br></br>
						</div>
					))}
				</div>

				<span>{product.toppings[0].title}</span>
				<div className={styles.pizza_size_radio_group}>
					{product.toppings[0].items.map((item) => (
						<div className={styles.radio_btn}>
							{product.toppings[0].isRadio ? (
								<input
									type='radio'
									id='html'
									name='name'
									value={item.name}
								/>
							) : (
								<input type='checkbox' />
							)}
							  <label for='html'>{item.name}</label>
							<br></br>
						</div>
					))}
				</div>
			</div>
			<footer className={styles.form_footer}>
				<span>
					<i class='fa-solid fa-indian-rupee-sign'></i>{' '}
					{product.price}
				</span>
				<div className={`${styles.control} `}>
					<div
						className={`${styles.control} control btn-secondary btn-red`}>
						<i
							class='fa-solid fa-minus'
							onClick={() => changeHandler('increase')}></i>
						<h3>Add</h3>
						<i
							class='fa-solid fa-plus'
							onClick={() => changeHandler('decrease')}></i>
					</div>
					<div className={styles.add_cart}>
						<h4>Add To Cart</h4>
						<i class='fa-solid fa-cart-plus'></i>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default AddForm;
