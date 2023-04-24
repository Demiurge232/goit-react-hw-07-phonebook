import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = { storageContact: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.storageContact.find(
            contact => contact.name === action.payload.name
          )
        ) {
          toast.error(`${action.payload.name} is already in contacts`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          return;
        } else {
          state.storageContact.push(action.payload);
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      state.storageContact = state.storageContact.filter(
        contact => (state.storageContact = contact.id !== action.payload)
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistorContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
