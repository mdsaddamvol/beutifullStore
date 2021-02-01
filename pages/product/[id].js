import Nav from "../../components/nav/nav";
import styles from "../../styles/product.module.scss";
function Product({ product }) {
	return (
		<>
			<Nav />
			<div className={styles.main}>
				<div className={styles.imgContiner}>
					<img src={product.data.imgurl} alt='item' />
				</div>

				<div className={styles.info}>
					<h2>NAME: {product.data.name.toUpperCase()}</h2>
					<p>DISCRIPTION: {product.data.discription}</p>
					<p>PRICE: ${product.data.price}</p>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`https://mztech-test-store.herokuapp.com/api/product/${params.id}`,
		{
			method: "GET",
		}
	);
	const product = await res.json();

	return {
		props: {
			product,
		},
	};
}

export default Product;
