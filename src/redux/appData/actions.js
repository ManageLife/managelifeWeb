import { UPDATE_APP_LOCATION, SET_IS_LOADING } from './actionTypes'

const updateAppLocation = location => {
   return {
      type: UPDATE_APP_LOCATION,
      location,
   }
}

const setIsLoading = (loadingState, bool) => {
   return {
      type: SET_IS_LOADING,
      action: { loadingState, bool },
   }
}

export { updateAppLocation, setIsLoading }
