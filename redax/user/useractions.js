import { userActionTypes } from "./userActionTypes";

export const setUserLogedIn = (user) => ({
	type: userActionTypes.setUserLogedIn,
	payload: user,
});
export const Logout = () => ({
	type: userActionTypes.Logout,
});
