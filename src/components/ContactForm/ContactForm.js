import  { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css'


export default function ContactForm({addContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        addContact({name, number})
        reset();
    };

    const reset = () => {
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};