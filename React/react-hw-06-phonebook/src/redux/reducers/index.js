import { combineReducers } from 'redux';
import contacts from './contactsReducer';
import filter from './filterRedecer';

const rootReducer = combineReducers({
  contacts: contacts,
  filter: filter,
});

export default rootReducer;
