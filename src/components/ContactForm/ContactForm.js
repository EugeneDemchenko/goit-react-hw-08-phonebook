import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css'

class ContactForm extends Component {

    state = {
        number: '',
        name: '',
    };
    
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact({ ...this.state });
        this.reset();
    };
    
    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <label htmlFor="name">
                    Name:
                    <input
                        placeholder="Name Surname"
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        className='form__input'
                    />
                </label>
                <label htmlFor="number">
                    Number:   
                    <input
                        placeholder="123-45-67"
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        className='form__input'
                    />
                </label>

                <button type="submit" className='form__btn'>
                    Add Contact
                </button>
                </form>
        );
    }
}

export default ContactForm

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};