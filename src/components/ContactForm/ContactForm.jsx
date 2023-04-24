import { useDispatch, useSelector } from 'react-redux';
import {
  PhonebookForm,
  PhonebookButton,
  PhonebookInput,
} from './ContactForm.styled';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { selectItems } from 'redux/selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, phone } = event.target.elements;

    if (items.find(contact => contact.name === name.value)) {
      toast.error(`${name.value} is already in contacts`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }

    const contactData = {
      name: name.value,
      phone: phone.value,
    };

    dispatch(addContact(contactData));
    reset(event);
  };

  const reset = event => {
    const { name, phone } = event.target.elements;
    name.value = '';
    phone.value = '';
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label>Name</label>
      <PhonebookInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <PhonebookInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <PhonebookButton type="submit">Add contact</PhonebookButton>
    </PhonebookForm>
  );
}
