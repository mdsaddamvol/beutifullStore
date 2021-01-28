import styles from "./card.module.scss";
const Card = (img) => (
	<div className={styles.main}>
		<img
			src='/static/phone.jpg'
			alt='shop item pic'
			className={styles.item_img}
		/>
		<img
			src='/static/shoe.jpg'
			alt='shop item pic'
			className={styles.item_img}
		/>

		<img
			src='/static/hat.jpg'
			alt='shop item pic'
			className={styles.item_img}
		/>
		<img
			src='/static/glsess.jpg'
			alt='shop item pic'
			className={styles.item_img}
		/>
		<img
			src='/static/laptop.jpg'
			alt='shop item pic'
			className={styles.item_img}
		/>
	</div>
);

export default Card;
