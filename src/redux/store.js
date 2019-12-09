import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import localstorage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { rootReducer } from './reducers'
import { firebase, rrfConfig } from '../config/firebase/firebaseConfig'

const persistConfig = {
   key: 'root',
   storage: localstorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(
   applyMiddleware(...middleware),
   // This is not mentioned in the docs but a solution is outlined here:
   // https://github.com/prescottprue/react-redux-firebase/issues/620
   reduxFirestore(firebase),
)

// Create & configure store
const initialState = window && window.__INITIAL_STATE__
const store = createStore(persistedReducer, enhancers, initialState)

const persistor = persistStore(store)

// React-Redux-Firebase props for Provider in src/App.js
const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch,
}

export { store, persistor, rrfProps }
