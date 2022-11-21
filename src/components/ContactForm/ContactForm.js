import  { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactOperation';
import './ContactForm.css'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(state=>state.contacts.contacts.item)
    const dispatch = useDispatch()

    const handleChange = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            case 'number':
                setNumber(e.target.value)
                break;
            default:
                return
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.some(contact => {return contact.name === name || contact.number === number;})){
            return alert(`Name ${name} or Number ${number}: is already in contacts`);
        }

        dispatch(addContacts({name, number}))

        setName('');
        setNumber('')
    };
    
    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="name">
                Name:
                <input
                    placeholder="Name Surname"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    className='form__input'
                />
            </label>
            <label htmlFor="number">
                Number:   
                <input
                    placeholder="123-45-67"
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    className='form__input'
                />
            </label>

            <button type="submit" className='form__btn'>
                Add Contact
            </button>
        </form>
    )
}