import {
	CONTACT_REQUEST_START,
	CONTACT_REQUEST_SUCSSES,
	GET_CONTACTS_START,
	GET_CONTACTS_SUCSSES,
	DELETE_CONTACTS_START,
	DELETE_CONTACTS_SUCSSES,
} from "../types";
const initialState = false;

export default (state = initialState, { type }) => {
	switch (type) {
		case CONTACT_REQUEST_START:
		case GET_CONTACTS_START:
		case DELETE_CONTACTS_START:
			return true;
		case CONTACT_REQUEST_SUCSSES:
		case GET_CONTACTS_SUCSSES:
		case DELETE_CONTACTS_SUCSSES:
			return false;

		default:
			return state;
	}
};
