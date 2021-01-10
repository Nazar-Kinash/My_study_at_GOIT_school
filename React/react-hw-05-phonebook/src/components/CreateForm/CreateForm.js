import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formStyles from './CreateForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import { CSSTransition } from 'react-transition-group';
import '../../animation/animation.css';

const formInitialState = {
  name: '',
  number: '',
};

const CreateForm = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);
  const [massage, setMassage] = useState('');

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
      setMassage('Name should have at lest 4 simbols !');
      return;
    }
    if (newContact.number.length < 7) {
      setMassage('Number should have at lest 7 simbols !');
      return;
    }
    const resalt = contacts.find(({ name }) => name === newContact.name);
    if (resalt) {
      setMassage(`${resalt.name} is alredy in contacts`);
      return;
    }
    setForm(formInitialState);
    setMassage('');
    addContact(newContact);
  };

  const { name, number } = form;
  return (
    <>
      <CSSTransition
        in={!!massage}
        timeout={250}
        classNames='alert'
        mountOnEnter
        unmountOnExit>
        <Alert setMassage={setMassage} text={massage} />
      </CSSTransition>

      <form
        className={formStyles['contact-form']}
        autoComplete='off'
        onSubmit={submitHandler}>
        <Input
          value={name}
          onChange={inputHandler}
          type='text'
          name='name'
          placeholder='Name'
          labelText='Name'
        />
        <Input
          value={number}
          onChange={inputHandler}
          type='tel'
          name='number'
          placeholder='Number'
          labelText='Number'
        />
        <Button type='submit' title='Add contact' />
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
