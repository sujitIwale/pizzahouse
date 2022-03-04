import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrducts } from '../../redux/products/productsActions';
import { apiUrl } from '../../utils/apiEndpoints';
import PizzaCard from '../PizzaCard/PizzaCard';
import styles from './ProductList.module.css';

const ProductList = () => {
	const products = useSelector((state) => state.products.products);
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
			{products.map((product) => (
				<PizzaCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
