function Product({ product }) {
	return (
		<div>
			<img src={product.data.imgurl} alt='item' />
			<h2>{product.data.name}</h2>
			<p>{product.data.discription}</p>
			<p>{product.data.price}</p>
		</div>
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
