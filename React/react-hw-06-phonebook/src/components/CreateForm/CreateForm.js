import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import formStyles from './CreateForm.module.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { contacts, addContact } from '../../modules/slices/contactsSlice';

const formInitialState = {
  name: '',
  number: '',
};

const CreateForm = () => {
  const [form, setForm] = useState(formInitialState);
  const [massage, setMassage] = useState('');

  const contactsList = useSelector(contacts);
  const dispatch = useDispatch();

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
    validator(contact);
  };

  const validator = (newContact) => {
    const resalt = contactsList.find(
      ({ name }) => name.trim() === newContact.name.trim(),
    );
    if (resalt) {
      setMassage(`${resalt.name} is alredy in contacts`);
      return;
    } else if (newContact.name.length < 4) {
      setMassage('Name should have at lest 4 simbols !');
      return;
    } else if (newContact.number.length < 7) {
      setMassage('Number should have at lest 7 simbols !');
      return;
    }

    setForm(formInitialState);
    setMassage('');
    dispatch(addContact(newContact));
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

export default CreateForm;
