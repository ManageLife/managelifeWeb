import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
   PropertyCard,
   HeaderText,
   AddButtons,
} from '../../../components/custom'
import { AlertPopup } from '../../../components/utility'
import { deletePropertyAPI } from '../../../redux/API'
import './index.css'

class Properties extends PureComponent {
   state = {
      alertVisible: false,
      selectedProperty: null,
   }

   _toggleAlert = () => {
      this.setState(prevState => ({ alertVisible: !prevState.alertVisible }))
   }

   _deleteProperty = async () => {
      const { deleteProperty } = this.props
      const { selectedProperty } = this.state

      await deleteProperty(selectedProperty)
      this.setState({ selectedProperty: null })
      this._toggleAlert()
   }

   render() {
      const { alertVisible } = this.state
      const { properties } = this.props

      return (
         <div id='properties-container'>
            <HeaderText>Properties</HeaderText>
            <div id='properties-list'>
               {properties.map((property, index) => {
                  const { remote } = property.image
                  let image = null
                  if (remote) {
                     image = remote
                  }

                  return (
                     <div
                        id='property-wrapper'
                        key={`${property.name}_${index}`}
                     >
                        <PropertyCard
                           deleteProperty={() =>
                              this.setState({
                                 selectedProperty: property.id,
                                 alertVisible: true,
                              })
                           }
                           name={property.name}
                           address1={property.address1}
                           address2={property.address2}
                           city={property.city}
                           state={property.state}
                           zipcode={property.zipcode}
                           imageSource={image}
                           inventoryTotal={property.inventoryTotal}
                           requestTotal={property.requestTotal}
                        />
                     </div>
                  )
               })}
            </div>
            <AlertPopup
               open={alertVisible}
               title='Delete this property?'
               onCancel={this._toggleAlert}
               onConfirm={this._deleteProperty}
            >
               This cannot be undone and will also delete any inventory and
               requests associated with this property.
            </AlertPopup>
            <AddButtons />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      properties: Object.values(state.properties) || [],
   }
}

const mapDispatchToProps = dispatch => ({
   deleteProperty: propertyId => dispatch(deletePropertyAPI(propertyId)),
})

Properties = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Properties)

export { Properties }
