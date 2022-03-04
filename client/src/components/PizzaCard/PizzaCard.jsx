import React from 'react';
import styles from './PizzaCard.module.css';

const PizzaCard = ({ product }) => {
	const addItemHandler = () => {};
	const type = product.isVeg ? 'Veg' : 'Non-Veg';
	console.log(type);
	return (
		<div className={`${styles.pizza_card_container}`}>
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
					<i class='fa-solid fa-indian-rupee-sign'></i>{' '}
					{product.price}
				</span>
				<div
					className={`${styles.control} btn-secondary btn-red pointer`}
					onClick={addItemHandler}>
					<i class='fa-solid fa-minus'></i>
					<h3>Add</h3>
					<i class='fa-solid fa-plus'></i>
				</div>
			</div>
		</div>
	);
};

export default PizzaCard;
