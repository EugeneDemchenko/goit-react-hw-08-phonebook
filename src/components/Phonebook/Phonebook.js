import React from "react";

const Phonebook = () => {
    return (
        <div>
            <h2>Phonebook</h2>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            <h3>Contacts</h3>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}


export default Phonebook