import { navigate } from '@reach/router'
import { updateUserInfo, userLogout } from '../user/actions'
import { setAllProperties } from '../properties/actions'
import { setAllItems } from '../inventory/actions'
import { setAllRequests } from '../requests/actions'
import { updateObject } from '../../utils/reduxHelpers'

const getAllUserDataAPI = loginEmail => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()

   let userEmail
   if (loginEmail) {
      userEmail = await loginEmail
   } else {
      userEmail = await getState().user.email
   }

   try {
      let firestoreData = null

      firestoreData = await firestore
         .collection('users')
         .doc(userEmail)
         .get()
         .then(res => {
            const data = res.data()
            if (data) {
               return data
            }

            return null
         })

      if (userEmail && firestoreData) {
         // Properties
         await dispatch(setAllProperties(firestoreData.properties || {}))
         // Inventory
         await dispatch(setAllItems(firestoreData.inventory || {}))
         // Requests
         await dispatch(setAllRequests(firestoreData.requests || {}))
         // User Data only for login
         if (loginEmail) {
            await dispatch(updateUserInfo(firestoreData.user))
         }
         console.log(firestoreData)
      }

      return true
   } catch (err) {
      return false
   }
}

const createNewUserAPI = (data, navigation) => async (
   dispatch,
   getState,
   { getFirebase, getFirestore },
) => {
   const firebase = getFirebase()
   const firestore = getFirestore()
   const { email, password, firstName, lastName, phoneNumber } = data
   try {
      const res = await firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
      if (res && res.user) {
         const { uid } = res.user
         const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            userID: uid,
            itemCategories: ['Appliances', 'Electronics', 'Furniture', 'Tools'],
         }
         const ref = firestore.collection('users').doc(email)
         ref.set({
            user: userData,
            inventory: {},
            properties: {},
            requests: {},
         })
         await dispatch(updateUserInfo(userData))
         navigate('/feed')
      }
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem creating your account.'
      alert(`Error: ${errorMessage}`)
   }
}

const loginUserAPI = data => async (dispatch, getState, { getFirebase }) => {
   const firebase = getFirebase()
   const { email, password } = data
   try {
      const res = await firebase
         .auth()
         .signInWithEmailAndPassword(email, password)

      if (res.user.email) {
         return true
      }
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem logging you in.'
      alert(`Error: ${errorMessage}`)
      return false
   }
}

const logoutUserAPI = () => (dispatch, getState, { getFirebase }) => {
   const firebase = getFirebase()
   try {
      firebase.logout()
      navigate('/auth')
      dispatch(userLogout())
   } catch (err) {
      alert('There was a problem logging you out.')
   }
}

const updateUserInfoAPI = info => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()
   const userEmail = getState().user.email
   try {
      // User Firestore reference
      const userRef = firestore.collection('users').doc(userEmail)

      // Fetch Firestore user data
      const userData = await userRef.get().then(res => {
         let user = {}
         const data = res.data()

         if (data && data.user) {
            user = { ...data.user }
         }

         return user
      })

      // Update Firestore data with new user data
      const updatedUserData = updateObject(userData, {
         ...info,
      })

      // Save updated user data data to Firestore and redux
      userRef.update({ user: { ...updatedUserData } })
      await dispatch(updateUserInfo({ ...updatedUserData }))
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a updating this info.'
      alert(`Error: ${errorMessage}`)
      return false
   }
}

export {
   getAllUserDataAPI,
   createNewUserAPI,
   loginUserAPI,
   logoutUserAPI,
   updateUserInfoAPI,
}
