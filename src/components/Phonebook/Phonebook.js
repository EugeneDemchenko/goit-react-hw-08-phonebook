import React from "react";

const Phonebook = ({contact}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            <p>Phone number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            <h3>Contacts</h3>
            <ul>
                {contact.map((el) => (
                    <li key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.number}</p>
                        <button>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Phonebook