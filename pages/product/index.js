import { connect } from "react-redux";
const Products = ({ product }) => {
	return (
		<div>
			<img src={product.imgurl} alt='product' />
			<h2>{product.name}</h2>
			<p>{product.discription}</p>
			<p>{product.price}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		product: state.productsState.product,
	};
};
export default connect(mapStateToProps)(Products);
