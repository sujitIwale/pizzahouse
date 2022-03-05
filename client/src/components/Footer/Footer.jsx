import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer_container}>
			<div className={`${styles.logo_container} pointer`}>
				<img
					className={styles.logo_img}
					alt='logo-img'
					src='https://st2.depositphotos.com/1588812/6826/v/950/depositphotos_68261337-stock-illustration-vector-logo-slice-of-pizza.jpg'
				/>
				<h2>PizzaHouse</h2>
			</div>
			<div className={styles.footer_content}>
				<ul>
					<li>Company</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
				<ul>
					<li>Restaurants</li>
					<li>Party Orders</li>
				</ul>
				<ul>
					<li>Privacy and Policy</li>
					<li>Terms and Conditions</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
