import styles from "./card.module.scss";

const Card = ({ _id, name, discription, price, imgurl }) => {
	return (
		<div className={styles.main}>
			<img src={imgurl} alt='shop item pic' className={styles.item_img} />
			<h2>{name.toUpperCase()}</h2>
			<p>{discription}</p>
			<p>{price}</p>
		</div>
	);
};

export default Card;
