import {
   // addNewItem,
   // deleteItem,
   setAllItems,
   updateItemDetails,
} from '../inventory/actions'
import { setAllProperties } from '../properties/actions'
import { setAllRequests } from '../requests/actions'
import { updateObject } from '../../utils/reduxHelpers'
import { firestoreReduxSync } from '../../utils/firestoreHelpers'

const addNewItemAPI = newItem => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()
   const userEmail = getState().user.email
   try {
      // User Firestore reference
      const userRef = firestore.collection('users').doc(userEmail)

      // Update NewItem with image data
      let newItemCopy = { ...newItem }

      // Fetch Firestore inventory + property data
      const { inventory, properties } = await userRef.get().then(res => {
         const data = res.data()

         if (data) {
            return {
               inventory: data.inventory || {},
               properties: data.properties || {},
            }
         }

         return {
            inventory: {},
            properties: {},
         }
      })

      // Update Firestore data with new item
      const updatedInventory = updateObject(inventory, {
         [newItemCopy.id]: { ...newItemCopy },
      })

      // Update property with new inventory count, updated properties data
      const itemProperty = properties[newItemCopy.property.id]
      const updatePropertyItemCount = itemProperty.inventoryTotal + 1
      const updatedProperty = {
         ...itemProperty,
         inventoryTotal: updatePropertyItemCount,
      }
      const updatedProperties = updateObject(properties, {
         [updatedProperty.id]: { ...updatedProperty },
      })

      // Save updated inventory data to Firestore and redux
      userRef.update({
         inventory: { ...updatedInventory },
         properties: { ...updatedProperties },
      })
      await dispatch(setAllItems(updatedInventory))
      await dispatch(setAllProperties(updatedProperties))
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem adding this item.'
      alert(`Error: ${errorMessage}`)
   }
}

const updateItemDetailsAPI = (updates, identifier, idValue) => async (
   dispatch,
   getState,
) => {
   await dispatch(updateItemDetails(updates, identifier, idValue))
   const updatedStore = await getState()
   firestoreReduxSync(updatedStore.user.userID, { ...updatedStore })
}

const deleteItemAPI = (itemId, propertyId) => async (
   dispatch,
   getState,
   { getFirestore },
) => {
   const firestore = getFirestore()
   const userEmail = getState().firebase.auth.email
   try {
      const userRef = firestore.collection('users').doc(userEmail)
      const { inventory, requests, properties } = await userRef
         .get()
         .then(res => {
            const data = res.data()

            if (data) {
               return {
                  inventory: data.inventory || {},
                  requests: data.requests || {},
                  properties: data.properties || {},
               }
            }
            return {
               inventory: {},
               requests: {},
               properties: {},
            }
         })

      // Delete the selected item
      const updatedInventory = Object.values(inventory)
         .filter(item => item.id !== itemId)
         .reduce((itemObj, item) => {
            itemObj[item.id] = item
            return itemObj
         }, {})

      // Filter requests to not include those with deleted item
      const updatedRequests = Object.values(requests)
         .filter(request => request.item.id !== itemId)
         .reduce((reqObj, request) => {
            reqObj[request.id] = request
            return reqObj
         }, {})

      // Delete requests from root request collection
      const deleteRequests = Object.values(requests).filter(
         request => request.item.id === itemId,
      )
      deleteRequests.forEach(async request => {
         await firestore
            .collection('requests')
            .doc(request.id)
            .delete()
      })

      // Update property with new inventory + request count, updated properties data
      const itemProperty = properties[propertyId]
      const updatePropertyItemCount = itemProperty.inventoryTotal - 1
      const updatePropertyRequestCount =
         itemProperty.requestTotal - deleteRequests.length
      const updatedProperty = {
         ...itemProperty,
         inventoryTotal: updatePropertyItemCount,
         requestTotal: updatePropertyRequestCount,
      }
      const updatedProperties = updateObject(properties, {
         [propertyId]: { ...updatedProperty },
      })

      // Update the data in Firestore + local redux
      userRef.update({
         inventory: { ...updatedInventory },
         requests: { ...updatedRequests },
         properties: { ...updatedProperties },
      })
      await dispatch(setAllItems(updatedInventory))
      await dispatch(setAllRequests(updatedRequests))
      await dispatch(setAllProperties(updatedProperties))
   } catch (err) {
      const errorMessage = err.code
         ? err.message
         : 'There was a problem deleting this item.'
      alert(`Error: ${errorMessage}`)
   }
}

export { addNewItemAPI, updateItemDetailsAPI, deleteItemAPI }
