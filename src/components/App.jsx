import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/contactOperation';
import './App.css'
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';

export default function App() {

  const [isAuth] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    isAuth ? (
      <Routes>
        <Route path="/contacts" element={
          <div className='section'>
            <h1 className='section__title'>Phonebook</h1>
            <ContactForm/>

            <h2 className='section__title-secondary'>Contacts</h2>
            <Filter/>
            <ContactList/>
          </div>
        } />
        <Route path="*" element={<Navigate to={"/contacts"}/>}/>
      </Routes>
    ) : (
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to={"/register"}/>}/>
      </Routes>
    )
  );
}




