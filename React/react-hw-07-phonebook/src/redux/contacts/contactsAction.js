import axios from "axios";
import { ADD_CONTACT, REMOVE_CONTACT, GET_CONTACTS } from "../types";
import {
	addContactRequest,
	addContactSucsses,
	getContactsRequest,
	getContactsSucsses,
	deleteContactsRequest,
	deleteContactsSucsses,
} from "../loader/loaderAction";
import {
	postSetError,
	getSetError,
	deleteSetError,
} from "../error/errorAction";

export const addContact = (data) => ({
	type: ADD_CONTACT,
	payload: data,
});

export const removeContact = (id) => ({
	type: REMOVE_CONTACT,
	payload: id,
});

export const getContacts = (contacts) => ({
	type: GET_CONTACTS,
	payload: contacts,
});

const options = { headers: { "Content-Type": "application/json" } };

export const asyncAddContact = ({ name, number }) => async (dispactch) => {
	dispactch(addContactRequest());
	const contact = { name, number };
	try {
		const resalt = await axios.post(
			"http://localhost:5001/contacts",
			contact,
			options
		);
		dispactch(addContact(resalt.data));
	} catch (error) {
		dispactch(postSetError(`${error.message} - not added`));
	} finally {
		dispactch(addContactSucsses());
	}
};

export const asyncgetContacts = () => async (dispactch) => {
	dispactch(getContactsRequest());
	try {
		const resalt = await axios.get("http://localhost:5001/contacts");
		dispactch(getContacts(resalt.data));
	} catch (error) {
		dispactch(getSetError(error.message));
	} finally {
		dispactch(getContactsSucsses());
	}
};

export const asyncRemoveContact = (id) => async (dispactch) => {
	dispactch(deleteContactsRequest());
	try {
		const resalt = await axios.delete(`http://localhost:5001/contacts/${id}`);
		Number(resalt.status) === 200 && dispactch(removeContact(id));
	} catch (error) {
		dispactch(deleteSetError(`${error.message} - not deleted!`));
	} finally {
		dispactch(deleteContactsSucsses());
	}
};
