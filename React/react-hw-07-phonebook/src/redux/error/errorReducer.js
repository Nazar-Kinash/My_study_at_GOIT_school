import {
	POST_CONTACT_ERROR,
	GET_CONTACT_ERROR,
	DELETE_CONTACT_ERROR,
	CONTACT_REQUEST_START,
	GET_CONTACTS_START,
	DELETE_CONTACTS_START,
} from "../types";
const initialState = null;

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case POST_CONTACT_ERROR:
		case GET_CONTACT_ERROR:
		case DELETE_CONTACT_ERROR:
			return payload;
		case CONTACT_REQUEST_START:
		case GET_CONTACTS_START:
		case DELETE_CONTACTS_START:
			return null;
		default:
			return state;
	}
};
