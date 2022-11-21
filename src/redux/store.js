import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contactSlice';
import reducerFilter from './filterSlice'
import logger from 'redux-logger';


const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
})

const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState)
    return;
  }
  next(action);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})


