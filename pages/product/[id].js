// posts will be populated at build time by getStaticProps()
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({ params }) {
	// Call an external API endpoint to get product.
	// You can use any data fetching library
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
