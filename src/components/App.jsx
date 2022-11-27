import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/contactOperation';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import './App.css'
import { getIsAuth } from '../redux/auth/authSelectors';



export default function App() {

  // const [isAuth] = useState(false)
  const isAuth = useSelector(getIsAuth)
  // const isAuth = true

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




