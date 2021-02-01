import React from "react";
import styles from "../../styles/nav.module.scss";
import Link from "next/link";
import { connect } from "react-redux";
import { Logout } from "../../redax/user/useractions";

const Nav = ({ LogedIn, Logout }) => (
	<nav className={styles.main}>
		<Link href='/'>
			<a>
				<h3>HOME</h3>
			</a>
		</Link>
		{LogedIn ? (
			<h3 onClick={() => Logout()}>SIGN OUT</h3>
		) : (
			<Link href='/login'>
				<a>
					<h3>SIGN IN</h3>
				</a>
			</Link>
		)}
	</nav>
);
const mapStateToProps = (state, ownProps) => {
	return {
		LogedIn: state.User.LogedIn,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		Logout: () => {
			dispatch(Logout());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
