import { actionTypes } from "./actions-types";

export const setProducts = (items) => ({
	type: actionTypes.setProducts,
	payload: items,
});
export const setProduct = (item) => ({
	type: actionTypes.setProduct,
	payload: item,
});
