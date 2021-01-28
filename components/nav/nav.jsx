import React from "react";
import styles from "../../styles/nav.module.scss";
import Link from "next/link";
const Nav = () => (
	<nav className={styles.main}>
		<Link href='/products'>
			<a>PRODUCTS</a>
		</Link>
		<Link href='/login'>
			<a>LOGIN</a>
		</Link>
	</nav>
);

export default Nav;
