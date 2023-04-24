import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectItems = state => state.contacts.items;

export const selectFindContact = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
