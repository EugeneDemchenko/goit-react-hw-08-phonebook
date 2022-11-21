import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import { remove } from "../../redux/contactSlice";
import './ContactList.css'


const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts.item)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
console.log(contacts);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])
  
  const filterContacts = () => {
    if (filter.length === 0) return contacts;
    return contacts.filter((el)=> el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  const filteredContacts = filterContacts()

  return (
    <ul className='list'>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className='item'>
            {name}: {number}
            <button type="button" onClick={() => dispatch(remove(id))} className='item__btn'>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;