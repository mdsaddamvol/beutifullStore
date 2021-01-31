import styles from "./card.module.scss";
import { connect } from "react-redux";
import { setProduct } from "../../../redax/products/actions";
import { useRouter } from "next/router";
const Card = ({ _id, name, discription, price, imgurl, setProduct }) => {
	const item = { _id, name, discription, price, imgurl };
	const router = useRouter();
	const handlerouting = async () => {
		await router.push({ pathname: "/product/[_id]", query: { _id: _id } });
	};
	return (
		<div className={styles.main}>
			<img src={imgurl} alt='shop item pic' className={styles.item_img} />
			<h2>{name.toUpperCase()}</h2>
			<p>{discription}</p>
			<p>{price}</p>
		</div>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setProduct: (item) => {
			dispatch(setProduct(item));
		},
	};
};
export default connect(null, mapDispatchToProps)(Card);
