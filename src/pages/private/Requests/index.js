import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {
   FeedCard,
   HeaderText,
   AddButtons,
   SubheaderText,
} from '../../../components/custom'
import { AlertPopup } from '../../../components/utility'
import { deleteRequestAPI } from '../../../redux'
import './index.css'

class Requests extends PureComponent {
   state = { alertVisible: false, selectedRequest: null }

   _toggleAlert = () => {
      this.setState(prevState => ({ alertVisible: !prevState.alertVisible }))
   }

   _filterRequests = (properties, requests) => {
      let requestsArray = null

      if (properties.length) {
         const requestsObj = properties.reduce((obj, property) => {
            obj[property.name] = { propertyName: property.name, requests: [] }

            return obj
         }, {})

         if (requests.length) {
            requests.forEach(request => {
               const { id } = request
               const propertyName = request.property.name
               const propertyRequests = requestsObj[propertyName].requests
               let title
               let description

               if (request.status === 'processing') {
                  title = `${request.item.name} - Request Processing`
                  description = `We're currently processing your request for the following item: ${
                     request.item.name
                  }. We'll try to have a technician out there by ${moment(
                     request.date,
                  ).format('MMM Do, h:mm a')}.`
               }

               propertyRequests.push({
                  title,
                  description,
                  id,
                  propertyId: request.property.id,
               })
               requestsObj[propertyName] = {
                  requests: propertyRequests,
                  propertyName,
               }
            })
         }

         requestsArray = Object.values(requestsObj)
      }

      return requestsArray
   }

   _displayFeed = () => {
      const { properties, requests } = this.props
      const filteredRequests = this._filterRequests(properties, requests)

      return filteredRequests
   }

   _deleteRequest = async () => {
      const { deleteRequest } = this.props
      const { requestId, propertyId } = this.state.selectedRequest

      await deleteRequest(requestId, propertyId)
      this.setState({ selectedRequest: null })
      this._toggleAlert()
   }

   render() {
      const { requests, properties } = this.props
      const { alertVisible } = this.state

      return (
         <div id='requests-container'>
            <HeaderText>Feed</HeaderText>
            {this._filterRequests(properties, requests).map(property => (
               <FeedCard
                  key={property.propertyName}
                  property={property.propertyName}
                  requests={property.requests}
                  deleteRequest={requestInfo => {
                     this._toggleAlert()
                     this.setState({ selectedRequest: { ...requestInfo } })
                  }}
               />
            ))}
            <AlertPopup
               open={alertVisible}
               title='Cancel this request?'
               onCancel={this._toggleAlert}
               onConfirm={this._deleteRequest}
            >
               This cannot be undone.
            </AlertPopup>
            <AddButtons />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userEmail: state.user.email,
      properties: Object.values(state.properties) || [],
      inventory: Object.values(state.inventory) || [],
      requests: Object.values(state.requests) || [],
   }
}

const mapDispatchToProps = dispatch => ({
   deleteRequest: (requestId, propertyId) =>
      dispatch(deleteRequestAPI(requestId, propertyId)),
})

Requests = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Requests)

export { Requests }
