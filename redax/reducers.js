import { combineReducers } from "redux";
import productReducer from "./products/product-reducers";

const reducers = {
	products: productReducer,
};

export default combineReducers(reducers);
