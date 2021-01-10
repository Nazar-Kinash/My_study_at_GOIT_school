import React from 'react';
import PropTypes from 'prop-types';
import contactListStyles from './ContactList.module.css';

const ContactList = ({ contacts, filter, removeContact }) => {
  const filterContacts = () => {
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredArr;
  };
  return (
    <>
      <ul className={contactListStyles['contact-list']}>
        {(filter ? filterContacts() : contacts).map((contact) => (
          <li
            key={contact.id}
            className={contactListStyles['contact-list__item']}>
            {contact.name}: {contact.number}{' '}
            <button
              className={contactListStyles['delete-btn']}
              id={contact.id}
              onClick={removeContact}>
              Delete
            </button>
          </li>
        ))}
      </ul>
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
