import styles from "./card.module.scss";
const Card = (imgurl, name, discription, price) => (
	<div className={styles.main}>
		<img src={imgurl} alt='shop item pic' className={styles.item_img} />
		<h2>Name:{name}</h2>
		<p>Discription:{discription}</p>
		<p>pPrice:${price} </p>
	</div>
);

export default Card;
