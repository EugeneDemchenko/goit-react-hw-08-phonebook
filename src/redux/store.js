import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contactSlice';
import reducerFilter from './filterSlice'
import logger from 'redux-logger';
import auth from './auth/authSlice';


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
  reducer: {
    rootReducer,
    auth,
  },
  middleware: [thunk, logger],
    
})


