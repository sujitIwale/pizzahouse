import React from 'react';
import CardSkeleton from './CardSkeleton';
import styles from './PizzaCardSkeleton.module.css';

const PizzaCardSkeleton = () => {
	return (
		<div className={styles.pizza_card_skeleton_container}>
			{Array(6)
				.fill('')
				.map((el, i) => (
					<CardSkeleton key={i} />
				))}
		</div>
	);
};

export default PizzaCardSkeleton;
