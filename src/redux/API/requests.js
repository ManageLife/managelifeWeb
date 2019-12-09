import {
   // addNewRequest,
   updateRequestDetails,
   setAllRequests,
} from '../requests/actions'
import { setAllProperties } from '../properties/actions'
import { firestoreReduxSync } from '../../utils/firestoreHelpers'
import { updateObject } from '../../utils/reduxHelpers'

// The colors on this app are SO 10 years ago!
const addNewRequestAPI = newRequest => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()
   const userEmail = getState().user.email
   try {
      // User Firestore reference
      const userRef = firestore.collection('users').doc(userEmail)

      // Update newRequest with image data
      let newRequestCopy = { ...newRequest }

      // Fetch Firestore request data
      const { requests, properties } = await userRef.get().then(res => {
         const data = res.data()

         if (data) {
            return {
               requests: data.requests || {},
               properties: data.properties || {},
            }
         }
         return {
            requests: {},
            properties: {},
         }
      })

      // Update Firestore data with new request
      const updatedRequests = updateObject(requests, {
         [newRequestCopy.id]: { ...newRequestCopy },
      })

      // Update property with new inventory count, updated properties data
      const requestProperty = properties[newRequestCopy.property.id]
      const updatePropertyRequestCount = requestProperty.requestTotal + 1
      const updatedProperty = {
         ...requestProperty,
         requestTotal: updatePropertyRequestCount,
      }
      const updatedProperties = updateObject(properties, {
         [updatedProperty.id]: { ...updatedProperty },
      })

      // Save updated requests data to Firestore and redux
      userRef.update({
         requests: { ...updatedRequests },
         properties: { ...updatedProperties },
      })
      await dispatch(setAllRequests(updatedRequests))
      await dispatch(setAllProperties(updatedProperties))

      // Create copy in db root
      const newRequestRef = await firestore
         .collection('requests')
         .doc(newRequestCopy.id)
      newRequestRef.set(newRequestCopy)
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem creating this request.'
      alert(`Error: ${errorMessage}`)
   }
}

const updateRequestDetailsAPI = (updates, identifier, idValue) => async (
   dispatch,
   getState,
) => {
   await dispatch(updateRequestDetails(updates, identifier, idValue))
   const updatedStore = await getState()
   firestoreReduxSync(updatedStore.user.userID, { ...updatedStore })
}

const deleteRequestAPI = (requestId, propertyId) => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()
   const userEmail = getState().firebase.auth.email
   try {
      const userRef = firestore.collection('users').doc(userEmail)
      const { requests, properties } = await userRef.get().then(res => {
         const data = res.data()

         if (data) {
            return {
               requests: data.requests || {},
               properties: data.properties || {},
            }
         }
         return {
            requests: {},
            properties: {},
         }
      })

      // Delete the request
      const updatedRequests = Object.values(requests)
         .filter(request => request.id !== requestId)
         .reduce((reqObj, request) => {
            reqObj[request.id] = request
            return reqObj
         }, {})

      // Delete request from root request collection
      await firestore
         .collection('requests')
         .doc(requestId)
         .delete()

      // Update property with new inventory + request count, updated properties data
      const requestProperty = properties[propertyId]
      const updatePropertyRequestCount = requestProperty.requestTotal - 1
      const updatedProperty = {
         ...requestProperty,
         requestTotal: updatePropertyRequestCount,
      }
      const updatedProperties = updateObject(properties, {
         [propertyId]: { ...updatedProperty },
      })

      // Update the data in Firestore + local redux
      userRef.update({
         requests: { ...updatedRequests },
         properties: { ...updatedProperties },
      })
      await dispatch(setAllRequests(updatedRequests))
      await dispatch(setAllProperties(updatedProperties))
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem deleting this request.'
      alert(`Error: ${errorMessage}`)
   }
}

export { addNewRequestAPI, updateRequestDetailsAPI, deleteRequestAPI }
