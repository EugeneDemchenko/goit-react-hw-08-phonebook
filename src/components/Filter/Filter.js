import PropTypes from 'prop-types';
import './Filter.css'

const Filter = ({ handleChangeForm, value }) => {
  return (
    <input
        placeholder="Find a contact"
        onChange={handleChangeForm}
        type="text"
        name="filter"
        value={value}
        className='filter__input'  
    />
  );
};

export default Filter;

Filter.propTypes = {
    handleChangeForm: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};