import React from 'react';
import styles from './PizzaCardSkeleton.module.css';

const PizzaCardSkeleton = () => {
	return (
		<div className={`${styles.pizza_card_skeleton} ${styles.skeleton}`}>
			<div
				className={`${styles.pizza_card_skeleton_img} ${styles.skeleton}`}></div>
			<div className={styles.pizza_card_skeleton_footer}>
				<div
					className={`${styles.card_title} ${styles.skeleton}`}></div>
				<div
					className={`${styles.card_content} ${styles.skeleton}`}></div>
			</div>
		</div>
	);
};

export default PizzaCardSkeleton;
