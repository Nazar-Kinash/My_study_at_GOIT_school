import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formStyles from './CreateForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formInitialState = {
  name: '',
  number: '',
};

const CreateForm = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.length) {
      validator(contact);
    } else {
      setForm(formInitialState);
      addContact(contact);
    }
  };

  const validator = (newContact) => {
    if (newContact.name.length < 4) {
      toast.warn('Name should have at lest 4 simbols !');
      return;
    }
    const resalt = contacts.find(({ name }) => name === newContact.name);
    if (resalt) {
      toast.warn(`${resalt.name} is alredy in contacts`);
      return;
    }
    setForm(formInitialState);
    addContact(newContact);
  };

  const { name, number } = form;
  return (
    <>
      <ToastContainer />
      <form
        className={formStyles['contact-form']}
        autoComplete='off'
        onSubmit={submitHandler}>
        <label className={formStyles['form__label']} htmlFor='name'>
          Name
        </label>
        <input
          className={formStyles['form__input']}
          type='text'
          name='name'
          value={name}
          placeholder='name'
          onChange={inputHandler}
        />
        <label className={formStyles['form__label']} htmlFor='number'>
          Number
        </label>
        <input
          className={formStyles['form__input']}
          type='text'
          name='number'
          value={number}
          placeholder='number'
          onChange={inputHandler}
        />
        <input
          className={formStyles['form__button']}
          type='submit'
          value={'Add contact'}
        />
      </form>
    </>
  );
};

CreateForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default CreateForm;
