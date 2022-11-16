import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducerContacts from './contactSlice';
import reducerFilter from './filterSlice'

const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['contacts']
}
const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,

})
const persistedContactsReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
    // devTools: process.env.NODE_ENV === 'development',
    // preloadedState: {
    //     contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    //     filter: ''
    // }
})

export const persistor = persistStore(store)
