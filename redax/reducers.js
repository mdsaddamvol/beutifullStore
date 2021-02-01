import { combineReducers } from "redux";
import productReducer from "./products/product-reducers";
import userReducer from "./user/userReducer";

const reducers = {
	productsState: productReducer,
	User: userReducer,
};

export default combineReducers(reducers);
