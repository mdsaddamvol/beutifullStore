import { actionTypes } from "./actions-types";

const INITIAL_STATE = {
	products: [],
	product: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.setProducts:
			return { ...state, products: action.payload };
		case actionTypes.setProduct:
			return { ...state, product: action.payload };
		default:
			return state;
	}
};

export default productReducer;
