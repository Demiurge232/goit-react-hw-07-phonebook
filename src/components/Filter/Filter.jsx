import { useDispatch } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { findContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(findContact(event.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="">
      Find contacts by name
      <FilterInput type="text" onChange={handleChange} />
    </FilterLabel>
  );
};

export default Filter;
