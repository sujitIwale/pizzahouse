import React from 'react';
import { setSelectedProduct } from '../../redux/products/productsActions';
import styles from './PizzaCard.module.css';


const PizzaCard = ({ product, openModal, dispatch }) => {
	const addItemHandler = () => {
		dispatch(setSelectedProduct(product));
		openModal();
	};
	const type = product.isVeg ? 'Veg' : 'Non-Veg';
	console.log(type);
	return (
		<div
			className={`${styles.pizza_card_container} pointer`}
			onClick={addItemHandler}>
			<img
				className={`${styles.card_item_img}`}
				alt='card-img'
				src={product.img_url}
			/>
			<label className={`${styles.category_tag} ${type}`}>{type}</label>
			<div className={styles.card_details}>
				<div className={styles.product_details}>
					<h3 className={styles.product_title}>{product.name}</h3>
					<div
						className={`${styles.rating} ${
							product.rating >= 3.5
								? 'high'
								: product.rating >= 2
								? 'medium'
								: 'low'
						}`}>
						<span>{product.rating}</span>
						<i
							className={`fa fa-star ${styles.rating_star}`}
							aria-hidden='true'></i>
					</div>
				</div>
				<p className={styles.product_desc}>
					{product.description.length > 60
						? product.description.substr(0, 55) + '..read more'
						: product.description}
				</p>
			</div>
			<div className={styles.card_footer}>
				<span>
					<i className='fa-solid fa-indian-rupee-sign'></i>{' '}
					{product.price}
				</span>
				<div
					className={`${styles.control} btn-secondary btn-red pointer`}
					onClick={addItemHandler}>
					<h3>Add</h3>
				</div>
			</div>
		</div>
	);
};

export default PizzaCard;
