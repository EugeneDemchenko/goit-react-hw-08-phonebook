import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/contactOperation';
import './App.css'

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




