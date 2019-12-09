import { UPDATE_APP_LOCATION, SET_IS_LOADING } from './actionTypes'

const initialState = {
   location: { pathname: '/' },
   // Loading states throughout app
   isLoading: { login: false },
}

const appDataReducer = (state = initialState, action) => {
   let stateCopy
   switch (action.type) {
      case UPDATE_APP_LOCATION:
         stateCopy = { ...state }
         stateCopy.location = action.location
         return stateCopy
      case SET_IS_LOADING:
         stateCopy = { ...state }
         stateCopy.isLoading[action.loadingState] = action.bool
         return stateCopy
      default:
         return state
   }
}

export { appDataReducer }
