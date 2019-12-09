import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { USER_LOGOUT } from './user/actionTypes'
import { userReducer } from './user/reducers'
import { propertiesReducer } from './properties/reducers'
import { inventoryReducer } from './inventory/reducers'
import { requestsReducer } from './requests/reducers'
import { appDataReducer } from './appData/reducers'

// Root reducer
const appReducer = combineReducers({
   user: userReducer,
   properties: propertiesReducer,
   inventory: inventoryReducer,
   requests: requestsReducer,
   firebase: firebaseReducer,
   firestore: firestoreReducer,
   appData: appDataReducer,
})

// Configure redux-persist; if USER_LOGOUT is called, the store is purged
let rootReducer = (state, action) => {
   switch (action.type) {
      case USER_LOGOUT:
         storage.removeItem('persist:root')
         state = {
            appData: {
               location: { pathname: '/auth' },
               isLoading: { login: false },
            },
         }
         break
      default:
         return appReducer(state, action)
   }
}

export { rootReducer }
