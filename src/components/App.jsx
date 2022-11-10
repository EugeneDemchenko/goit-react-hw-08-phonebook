import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css'

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('')

  const handleChangeForm = e => {
    setFilter(e.target.value)
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.some(contact => {
        return contact.name === name || contact.number === number;
      })
    ) {
      return alert(`Name ${name} or Number ${number}: is already in contacts`);
    }
    setContacts(prev => [...prev, {id: nanoid(), name, number }]);
  };

  const filterContact = () => {
    if (filter.length === 0) return contacts;
    const foundContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return foundContacts;
  };

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className='section'>
      <h1 className='section__title'>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className='section__title-secondary'>Contacts</h2>
      <Filter
       handleChangeForm={handleChangeForm}
        value={filter}
      />
      <ContactList
        filterContact={filterContact()}
        removeContact={removeContact}
      />
    </div>
  );

}




