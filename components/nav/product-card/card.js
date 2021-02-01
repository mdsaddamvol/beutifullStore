import styles from "./card.module.scss";
import Link from "next/link";

const Card = ({ _id, name, discription, price, imgurl }) => {
	return (
		<div className={styles.main}>
			<Link href={`/product/${_id}`}>
				<a>
					<img src={imgurl} alt='shop item pic' className={styles.item_img} />
					<div className={styles.info}>
						<h2>{name.toUpperCase()}</h2>
						<h3>${price}</h3>
					</div>{" "}
				</a>
			</Link>
		</div>
	);
};

export default Card;
