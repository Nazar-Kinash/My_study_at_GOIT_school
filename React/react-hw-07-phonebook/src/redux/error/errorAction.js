import {
	POST_CONTACT_ERROR,
	GET_CONTACT_ERROR,
	DELETE_CONTACT_ERROR,
} from "../types";

export const postSetError = (error) => ({
	type: POST_CONTACT_ERROR,
	payload: error,
});

export const getSetError = (error) => ({
	type: GET_CONTACT_ERROR,
	payload: error,
});

export const deleteSetError = (error) => ({
	type: DELETE_CONTACT_ERROR,
	payload: error,
});
