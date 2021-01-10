import { ADD_CONTACT, REMOVE_CONTACT, GET_CONTACTS } from "../types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CONTACT:
			return [...state, payload];
		case REMOVE_CONTACT:
			return state.filter((contact) => contact.id !== payload);
		case GET_CONTACTS:
			return [...payload];

		default:
			return state;
	}
};
