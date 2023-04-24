import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactItemLi, ContactItemButton } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactItemLi>
      <span>
        {name}: {phone}
      </span>
      <ContactItemButton type="button" onClick={handeleDelete}>
        Delete
      </ContactItemButton>
    </ContactItemLi>
  );
};
export default ContactItem;

ContactItem.protoType = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
