import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import {
  PhonebookForm,
  PhonebookButton,
  PhonebookInput,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    dispatch(addContact(name.value, number.value));
    reset(event);
  };

  const reset = event => {
    const { name, number } = event.target.elements;
    name.value = '';
    number.value = '';
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label>Name</label>
      <PhonebookInput
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <PhonebookInput
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <PhonebookButton type="submit">Add contact</PhonebookButton>
    </PhonebookForm>
  );
}
