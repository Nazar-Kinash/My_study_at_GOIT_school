import { createSelector } from "reselect";
import { contactsSelector } from "../contacts/contactsSelectors";

export const filterSelector = (state) => state.filter;

export const filteredContactsSelector = createSelector(
	contactsSelector,
	filterSelector,
	(arr, filter) => {
		return arr.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase())
		);
	}
);
