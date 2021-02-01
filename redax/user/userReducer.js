import { userActionTypes } from "./userActionTypes";

const INITIAL_STATE = { User: {}, LogedIn: false };

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.setUserLogedIn:
			return { ...state, User: action.payload, LogedIn: !state.LogedIn };
		case userActionTypes.Logout:
			return { ...state, User: {}, LogedIn: !state.LogedIn };
		default:
			return state;
	}
};

export default userReducer;
