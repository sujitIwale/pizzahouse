import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setFilteredBy,
	setFilteredProducts,
} from '../../redux/products/productsActions';
import styles from './TopBar.module.css';

const TopBar = () => {
	const filteredBy = useSelector((state) => state.products.filteredBy);
	const dispatch = useDispatch();
	const addFiter = (filter) => {
		dispatch(setFilteredBy(filter));
		dispatch(setFilteredProducts(filter));
	};
	return (
		<div className={`${styles.top_bar} top-bar-container`}>
			<div className='flex column ma-b-4'>
				<h3>Sort By</h3>
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
			<div className={styles.toggle_container}>
				<h3 className='flex column ma-b-4'>Categories</h3>
				<div>
					<span
						onClick={() => addFiter('veg')}
						className={`${
							filteredBy === 'veg' ? 'selected-veg' : ''
						} pointer`}>
						Veg
					</span>
					<span
						onClick={() => addFiter('non-veg')}
						className={`${
							filteredBy === 'non-veg' ? 'selected-non-veg' : ''
						} pointer`}>
						Non Veg
					</span>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
