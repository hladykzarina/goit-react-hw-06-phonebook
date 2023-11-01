import { useSelector } from 'react-redux';
import styles from './App.module.css';
import { MyForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <>
      <h1>Phonebook</h1>
      <MyForm onSubmitForm={onSubmitForm} />
      <Filter value={filter} onFilter={onFilterInput} />
      <h2>Contacts</h2>
      <ContactList
        contacts={onFilterChange()}
        onDeleteClick={onDeleteContactClick}
      />
    </>
  );
};
