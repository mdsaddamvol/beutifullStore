import Nav from "../../components/nav/nav";
import styles from "../../styles/product.module.scss";
function Product({ product }) {
	return (
		<>
			<Nav />
			<div className={styles.main}>
				<img src={product.data.imgurl} alt='item' />
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
	const res = await fetch(`http://localhost:3000/api/product/${params.id}`, {
		method: "GET",
	});
	const product = await res.json();

	return {
		props: {
			product,
		},
	};
}

export default Product;
