import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredBy } from '../../redux/products/productsActions';
import styles from './TopBar.module.css';

const TopBar = () => {
	const filteredBy = useSelector((state) => state.products.filteredBy);
	const dispatch = useDispatch();
	const addFiter = (filter) => dispatch(setFilteredBy(filter));
	return (
		<div className={`${styles.top_bar} top-bar-container`}>
			<div className={styles.filter_options}>
				<span
					onClick={() => addFiter('all')}
					className={`${
						filteredBy === 'all' ? 'selected' : ''
					} pointer`}>
					All
				</span>
				<span
					onClick={() => addFiter('pltoh')}
					className={`${
						filteredBy === 'pltoh' ? 'selected' : ''
					} pointer`}>
					Prize Low to High
				</span>
				<span
					onClick={() => addFiter('phtol')}
					className={`${
						filteredBy === 'phtol' ? 'selected' : ''
					} pointer`}>
					Prize High to Low
				</span>
				<span
					onClick={() => addFiter('rhtol')}
					className={`${
						filteredBy === 'rhtol' ? 'selected' : ''
					} pointer`}>
					Rating High to Low
				</span>
				<span
					onClick={() => addFiter('rltoh')}
					className={`${
						filteredBy === 'rltoh' ? 'selected' : ''
					} pointer`}>
					Rating Low to High
				</span>
			</div>
		</div>
	);
};

export default TopBar;
