import React, { useEffect, useCallback, useState } from 'react';
import CreateForm from '../CreateForm/CreateForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import storage from '../../helpers/storage';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import '../../animation/animation.css';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [logo, setLogo] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setFilter(value);
  };

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (e) => {
    setContacts(contacts.filter((contact) => contact.id !== e.target.id));
  };

  useEffect(() => {
    setLogo(true);
  }, [logo]);

  useEffect(() => {
    return () => {
      setLogo(false);
    };
  }, [logo]);

  const getStorageData = () => {
    const contactsStorage = storage.get('contacts');
    console.log(contactsStorage);
    if (contactsStorage) {
      setContacts([...contactsStorage]);
    }
  };

  const updateStorage = useCallback(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  useEffect(() => {
    getStorageData();
  }, []);

  useEffect(() => {
    updateStorage();
  }, [contacts, updateStorage]);

  return (
    <>
      <CSSTransition
        in={logo}
        timeout={500}
        classNames='logo'
        mountOnEnter
        unmountOnExit>
        <h1 className={styles['logo']}>Phonebook</h1>
      </CSSTransition>

      <CreateForm addContact={addContact} contacts={contacts} />

      <CSSTransition
        in={contacts.length >= 2}
        classNames='filter'
        timeout={250}
        mountOnEnter
        unmountOnExit>
        <Filter filter={filter} inputHandler={inputHandler} />
      </CSSTransition>

      <ContactList
        contacts={contacts}
        filter={filter}
        removeContact={removeContact}
      />
    </>
  );
};

export default Phonebook;
