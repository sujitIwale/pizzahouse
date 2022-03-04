import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrducts } from '../../redux/products/productsActions';
import { apiUrl } from '../../utils/apiEndpoints';
import PizzaCard from '../PizzaCard/PizzaCard';
import Modal from '../Modal/Modal';
import styles from './ProductList.module.css';
import AddForm from '../AddForm/AddForm';

const ProductList = () => {
	const [ModalOpen, setModalOpen] = useState(false);
	const { products, selectedProduct } = useSelector(
		(state) => state.products
	);
	// const [products, setproducts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				dispatch(setPrducts(data));
			});
	}, []);
	return (
		<div className={`${styles.product_list_container} product-section`}>
			{ModalOpen && (
				<Modal
					closeModal={() => setModalOpen(false)}
					modalTitle={selectedProduct.name}>
					<AddForm
						product={selectedProduct}
						dispatch={dispatch}
						closeModal={() => setModalOpen(false)}
					/>
				</Modal>
			)}
			{products.map((product) => (
				<PizzaCard
					key={product.id}
					product={product}
					dispatch={dispatch}
					openModal={() => setModalOpen(true)}
				/>
			))}
		</div>
	);
};

export default ProductList;
