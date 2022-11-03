import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';

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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input
                        placeholder="Name"
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                    />
                </label>
                <label htmlFor="number">
                    Number
                    <input
                        placeholder="Number"
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                    />
                </label>

                <button type="submit">
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