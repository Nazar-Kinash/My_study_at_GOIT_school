import React, { useEffect, useCallback, useState } from 'react';
import CreateForm from '../CreateForm/CreateForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import storage from '../../helpers/storage';
import { CSSTransition } from 'react-transition-group';
import styles from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contacts, updateContacts } from '../../modules/slices/contactsSlice';

const Phonebook = () => {
  const [logo, setLogo] = useState(false);

  const contactsList = useSelector(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    setLogo(true);
  }, [logo]);

  useEffect(() => {
    return () => {
      setLogo(false);
    };
  }, [logo]);

  const updateStorage = useCallback(() => {
    storage.save('contacts', contactsList);
  }, [contactsList]);

  useEffect(() => {
    dispatch(updateContacts());
  }, [dispatch]);

  useEffect(() => {
    updateStorage();
  }, [contactsList, updateStorage]);

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

      <CreateForm />

      <CSSTransition
        in={contactsList.length >= 2}
        classNames='filter'
        timeout={250}
        mountOnEnter
        unmountOnExit>
        <Filter />
      </CSSTransition>

      <ContactList />
    </>
  );
};

export default Phonebook;
