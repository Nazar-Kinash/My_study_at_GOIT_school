import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../animation/animation.css';

const ContactList = ({ contacts, filter, removeContact }) => {
  const filterContacts = () => {
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredArr;
  };
  return (
    <>
      <TransitionGroup component='ul' className={styles['contact-list']}>
        {(filter ? filterContacts() : contacts).map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames='list__item'>
            <li className={styles['contact-list__item']}>
              {contact.name}
              {' - '} {contact.number}
              <button
                className={styles['delete-btn']}
                id={contact.id}
                onClick={removeContact}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
