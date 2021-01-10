import React, { Component } from 'react';
import CreateForm from '../CreateForm/CreateForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import storage from '../../helpers/storage';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getStorageData = () => {
    const contactsStorage = storage.get('contacts');
    if (contactsStorage) {
      this.setState({
        contacts: contactsStorage,
      });
    }
  };

  componentDidMount() {
    this.getStorageData();
  }

  updateStorage = (prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      storage.save('contacts', this.state.contacts);
    }
  };

  componentDidUpdate(prevState) {
    this.updateStorage(prevState);
  }

  inputHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  addContact = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  removeContact = (e) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== e.target.id),
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <CreateForm addContact={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter filter={filter} inputHandler={this.inputHandler} />
        )}
        <ContactList
          contacts={contacts}
          filter={filter}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default Phonebook;
