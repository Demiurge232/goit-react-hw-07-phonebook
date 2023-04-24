import ContactItem from 'components/ContactItem/ContactItem';
import { ContactListUl } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFindContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const renderFindContact = getFindContact();

  return (
    <ContactListUl>
      {renderFindContact.map(({ name, id, number }) => (
        <ContactItem name={name} key={id} id={id} number={number} />
      ))}
    </ContactListUl>
  );
};

export default ContactList;
