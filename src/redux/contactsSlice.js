import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { toast } from 'react-toastify';
// import { nanoid } from 'nanoid';

const handelePending = state => {
  state.isLoading = true;
};

const handeleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handelePending,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: handeleRejected,

    [addContact.pending]: handelePending,

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handeleRejected,

    [deleteContact.pending]: handelePending,

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const contactIndex = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(contactIndex, 1);
    },
    [deleteContact.rejected]: handeleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
