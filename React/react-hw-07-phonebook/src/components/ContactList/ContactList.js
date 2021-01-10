//Code
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
//Components
import Loader from "react-loader-spinner";
import Error from "../Error/Error";
//Instruments
import { contactsSelector } from "../../redux/contacts/contactsSelectors";
import {
	filterSelector,
	filteredContactsSelector,
} from "../../redux/filter/filterSelectors";
import { loaderSelector } from "../../redux/loader/loaderSelectors";
import { errorSelector } from "../../redux/error/errorSelectors";
import { asyncRemoveContact } from "../../redux/contacts/contactsAction";
//styles
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./ContactList.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const ContactList = () => {
	const contactsList = useSelector((state) => contactsSelector(state));
	const filterValue = useSelector((state) => filterSelector(state));
	const filteredContacts = useSelector((state) =>
		filteredContactsSelector(state)
	);
	const loader = useSelector((state) => loaderSelector(state));
	const error = useSelector((state) => errorSelector(state));
	const dispatch = useDispatch();

	const deleteItem = (e) => {
		dispatch(asyncRemoveContact(Number(e.target.id)));
	};

	return (
		<>
			<TransitionGroup component="ul" className={styles["contact-list"]}>
				{(filterValue ? filteredContacts : contactsList).map((contact) => (
					<CSSTransition key={contact.id} timeout={250} classNames="list__item">
						<li className={styles["contact-list__item"]}>
							{contact.name}
							{" - "} {contact.number}
							<button
								className={styles["delete-btn"]}
								id={contact.id}
								onClick={deleteItem}
							>
								Delete
							</button>
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
			{loader && (
				<Loader type="ThreeDots" color="#03059b" height={50} width={50} />
			)}
			<TransitionWrapper action={!!error} clases="error" time={350}>
				<Error error={error} />
			</TransitionWrapper>
		</>
	);
};

export default ContactList;
