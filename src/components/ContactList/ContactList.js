import PropTypes from 'prop-types';
import './ContactList.css'


const ContactList = ({ filterContact, removeContact }) => {
  return (
    <ul className='list'>
      {filterContact.map(({ name, number, id }) => {
        return (
          <li key={id} className='item'>
            {name}: {number}
            <button type="button" onClick={() => {removeContact(id)}} className='item__btn'>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};