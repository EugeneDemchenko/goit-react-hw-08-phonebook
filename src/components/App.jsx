import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css'
import { useEffect } from 'react';
// import { getContactApi } from '../utils/mockApi';
import { fetchContacts } from '../redux/contactOperation';
import { useDispatch } from 'react-redux';

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='section'>
      <h1 className='section__title'>Phonebook</h1>
        <ContactForm/>

      <h2 className='section__title-secondary'>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}




