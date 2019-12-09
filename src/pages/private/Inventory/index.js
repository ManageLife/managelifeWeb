import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
   HeaderText,
   InventoryDetails,
   InventoryList,
   AddButtons,
   SubheaderText,
} from '../../../components/custom'
import './index.css'

class Inventory extends PureComponent {
   state = {
      itemDetailsVisible: false,
      selectedItem: null,
      inventoryArray: null,
      requestItem: null,
      showNewRequest: false,
   }

   componentDidMount() {
      const { properties, inventory } = this.props
      this._sortInventoryByProperty(properties, inventory)
   }

   _toggleDetailsModal = () => {
      this.setState(prevState => ({
         itemDetailsVisible: !prevState.itemDetailsVisible,
      }))
   }

   _createInventoryLists = properties => {
      return properties.reduce((rootObj, property) => {
         rootObj[property.name] = property.rooms.map(room => {
            const obj = {
               title: room,
               inventory: [],
            }
            return obj
         })

         return rootObj
      }, {})
   }

   _sortInventoryByProperty = (properties, inventory) => {
      const inventoryObj = this._createInventoryLists(properties)
      inventory.forEach(item => {
         const objIndex = inventoryObj[item.property.name].findIndex(
            roomObj => {
               return roomObj.title === item.room
            },
         )
         inventoryObj[item.property.name][objIndex].inventory.push(item)
      })

      const inventoryArray = Object.keys(inventoryObj).map(propertyName => ({
         propertyName,
         rooms: inventoryObj[propertyName],
      }))

      this.setState({ inventoryArray })
   }

   _selectItem = async item => {
      await this.setState({ selectedItem: item })
      this._toggleDetailsModal()
   }

   render() {
      const {
         inventoryArray,
         itemDetailsVisible,
         selectedItem,
         requestItem,
         showNewRequest,
      } = this.state

      return (
         <div id='inventory-container'>
            <HeaderText>Inventory</HeaderText>
            {inventoryArray ? (
               inventoryArray.map((property, index) => (
                  <InventoryList
                     key={`${property.propertyName}${index}`}
                     propertyName={property.propertyName}
                     rooms={property.rooms}
                     onClick={item => this._selectItem(item)}
                  />
               ))
            ) : (
               <SubheaderText>Add a property to get started!</SubheaderText>
            )}
            <InventoryDetails
               open={itemDetailsVisible}
               onCancel={this._toggleDetailsModal}
               item={selectedItem}
               openRequest={async item => {
                  await this.setState({ requestItem: item })
                  await this._toggleDetailsModal()
                  this.setState({ showNewRequest: true })
               }}
            />
            <AddButtons
               selectedItem={requestItem}
               inventoryPage
               inventoryRequestVisible={showNewRequest}
               inventoryRequestToggle={() =>
                  this.setState({ showNewRequest: false, requestItem: null })
               }
            />
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userEmail: state.user.email,
      properties: Object.values(state.properties) || [],
      inventory: Object.values(state.inventory) || [],
   }
}

const mapDispatchToProps = () => ({})

Inventory = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Inventory)

export { Inventory }
