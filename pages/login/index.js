import React, { useState } from "react";
import { connect } from "react-redux";
import Nav from "../../components/nav/nav";
import { setUserLogedIn } from "../../redax/user/useractions";
import styles from "../../styles/login.module.scss";
import { useRouter } from "next/router";

const Login = ({ setUserLogedIn }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [singup, setSignup] = useState(false);
	const router = useRouter();
	const handlelogin = async (e) => {
		e.preventDefault();
		const user = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				email,
				pass,
			}),
		}).then((res) => res.json());

		if (user.data._id) {
			setUserLogedIn(user.data);
			router.push("/");
		}
	};
	const handlesignUp = async (e) => {
		e.preventDefault();
		const user = await fetch("http://localhost:3000/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				pass,
			}),
		}).then((res) => res.json());
		if (user.data._id) {
			setUserLogedIn(user.data);
			router.push("/");
		}
	};
	return (
		<>
			<Nav />
			<div className={styles.main}>
				{singup ? (
					<form onSubmit={(e) => handlesignUp(e)} className={styles.form}>
						<input
							onChange={(e) => setName(e.target.value)}
							type='text'
							placeholder='Name'
							required
						/>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
							required
						/>
						<input
							onChange={(e) => setPass(e.target.value)}
							type='password'
							placeholder='Password'
							required
						/>
						<br />
						<button type='submit'>SIGNUP</button>
						<p onClick={() => setSignup(!singup)}>
							Already have an account? LOGIN
						</p>
					</form>
				) : (
					<form onSubmit={(e) => handlelogin(e)} className={styles.form}>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
							required
						/>
						<input
							onChange={(e) => setPass(e.target.value)}
							type='password'
							placeholder='Password'
							required
						/>
						<br />
						<button type='submit'>LOGIN</button>
						<p onClick={() => setSignup(!singup)}>
							don't have an account? SIGNUP
						</p>
					</form>
				)}
			</div>
		</>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setUserLogedIn: (user) => {
			dispatch(setUserLogedIn(user));
		},
	};
};

export default connect(null, mapDispatchToProps)(Login);
