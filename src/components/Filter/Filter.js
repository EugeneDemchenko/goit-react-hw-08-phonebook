import { useDispatch, useSelector } from "react-redux";
import {add} from '../../redux/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.filter)
  return (
    <input
        placeholder="Find a contact"
        onChange={(e)=>dispatch(add(e.currentTarget.value))}
        type="text"
        name="filter"
        value={value}
        className='filter__input'  
    />
  );
};

export default Filter;