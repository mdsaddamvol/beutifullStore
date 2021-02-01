import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Nav from "../components/nav/nav";
import Card from "../components/nav/product-card/card.js";
import { setProducts } from "../redax/products/actions";
import { connect } from "react-redux";

const Home = ({ products, setProducts }) => {
	useEffect(() => {
		fetch("https://mztech-test-store/api/products", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((dat) => setProducts(dat.data));
	}, []);

	return (
		<div className={styles.main}>
			<Nav />
			<div className={styles.cards}>
				{products &&
					products.map((product) => {
						return <Card key={product._id} {...product} />;
					})}
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		products: state.productsState.products,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setProducts: (items) => {
			dispatch(setProducts(items));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
