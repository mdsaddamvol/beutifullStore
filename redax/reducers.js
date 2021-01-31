import { combineReducers } from "redux";
import productReducer from "./products/product-reducers";

const reducers = {
	productsState: productReducer,
};

export default combineReducers(reducers);
