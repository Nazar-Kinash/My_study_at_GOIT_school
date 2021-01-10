import React from 'react';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { contacts, removeContact } from '../../modules/slices/contactsSlice';
import { filter } from '../../modules/slices/filterSlice';

const ContactList = () => {
  const contactsList = useSelector(contacts);
  const filterValue = useSelector(filter);
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    dispatch(removeContact(e.target.id));
  };

  const filterContacts = () => {
    const filteredArr = contactsList.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );
    return filteredArr;
  };

  return (
    <>
      <TransitionGroup component='ul' className={styles['contact-list']}>
        {(filter ? filterContacts() : contactsList).map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames='list__item'>
            <li className={styles['contact-list__item']}>
              {contact.name}
              {' - '} {contact.number}
              <button
                className={styles['delete-btn']}
                id={contact.id}
                onClick={deleteItem}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
