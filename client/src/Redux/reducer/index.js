import { combineReducers } from "redux";
import userReducer from "./user";
import articleReducer from "./article";
import comentReducer from "./coment";



const rootReducer = combineReducers({
	userReducer,
	articleReducer,
	comentReducer,
});

export default rootReducer;
