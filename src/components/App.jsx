import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css'

export default function App() {
  
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




