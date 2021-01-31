import { actionTypes } from "./actions-types";

const INITIAL_STATE = {
	products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.setProducts:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};

export default productReducer;
