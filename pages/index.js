import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Nav from "../components/nav/nav";
import Card from "../components/nav/product-card/card";

export default function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/api/products", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => setData(data.data));
	}, []);
	return (
		<div className={styles.main}>
			<Nav />
			<pre>{JSON.stringify(data, null, 4)}</pre>
			<Card />
		</div>
	);
}
