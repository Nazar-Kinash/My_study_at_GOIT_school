import { createSelector } from "reselect";

export const contactsSelector = (state) => state.contacts;
export const contactNameSelector = createSelector(
	contactsSelector,
	(data) => data.name
);
export const contactNumberSelector = createSelector(
	contactsSelector,
	(data) => data.number
);
export const contactIdSelector = createSelector(
	contactsSelector,
	(data) => data.id
);
