import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProducts,
	setLoading,
} from '../../redux/products/productsActions';
import Modal from '../Modal/Modal';
import styles from './ProductList.module.css';
import AddForm from '../AddForm/AddForm';
import TopBar from '../TopBar/TopBar';
import PizzaCardSkeleton from '../Skeleton/PizzaCardSkeleton';
// import CardSkeleton from '../Skeleton/CardSkeleton';
import PizzaCard from '../PizzaCard/PizzaCard';
// const PizzaCard = React.lazy(() => import('../PizzaCard/PizzaCard'));

const ProductList = () => {
	const [ModalOpen, setModalOpen] = useState(false);
	const { products, selectedProduct, filtering, filteredProducts, loading } =
		useSelector((state) => state.products);
	// const [products, setproducts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoading(true));
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<div className={`${styles.product_list_container} product-section`}>
			<TopBar />
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
			{loading && <PizzaCardSkeleton />}
			{!loading && filtering
				? filteredProducts.map((product) => (
						<PizzaCard
							key={product.id}
							product={product}
							dispatch={dispatch}
							openModal={() => setModalOpen(true)}
						/>
				  ))
				: products.map((product) => (
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
