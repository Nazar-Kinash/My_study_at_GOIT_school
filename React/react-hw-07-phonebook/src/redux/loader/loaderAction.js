import {
	CONTACT_REQUEST_START,
	CONTACT_REQUEST_SUCSSES,
	GET_CONTACTS_START,
	GET_CONTACTS_SUCSSES,
	DELETE_CONTACTS_START,
	DELETE_CONTACTS_SUCSSES,
} from "../types";

export const addContactRequest = () => ({
	type: CONTACT_REQUEST_START,
});

export const addContactSucsses = () => ({
	type: CONTACT_REQUEST_SUCSSES,
});

export const getContactsRequest = () => ({
	type: GET_CONTACTS_START,
});

export const getContactsSucsses= () => ({
	type: GET_CONTACTS_SUCSSES,
});

export const deleteContactsRequest = () => ({
	type: DELETE_CONTACTS_START,
});

export const deleteContactsSucsses = () => ({
	type: DELETE_CONTACTS_SUCSSES,
});
