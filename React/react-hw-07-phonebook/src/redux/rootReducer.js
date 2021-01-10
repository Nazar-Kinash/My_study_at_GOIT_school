import { combineReducers } from "redux";
import contacts from "./contacts/contactsReducer";
import filter from "./filter/filterRedecer";
import loader from "./loader/loaderReducer";
import error from "./error/errorReducer";

const rootReducer = combineReducers({
	contacts: contacts,
	filter: filter,
	loader: loader,
	error: error,
});

export default rootReducer;
