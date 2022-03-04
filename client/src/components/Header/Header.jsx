import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header_container}>
			<div className={`${styles.header} main-container`}>
				<div className={`${styles.header_logo_container} pointer`}>
					<img
						className={styles.logo_img}
						alt='logo-img'
						src='https://st2.depositphotos.com/1588812/6826/v/950/depositphotos_68261337-stock-illustration-vector-logo-slice-of-pizza.jpg'
					/>
					<h2>PizzaHouse</h2>
				</div>
			</div>
		</header>
	);
};

export default Header;
