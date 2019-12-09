import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import { connect } from 'react-redux'
import { generateUniqueID } from '../../../../utils'
import { addNewPropertyAPI } from '../../../../redux/API/properties'
import './index.css'

class NewProperty extends PureComponent {
   state = {
      info: {
         name: null,
         address1: null,
         address2: null,
         city: null,
         zipcode: null,
         state: null,
         country: null,
         image: { uri: null, base64: null },
      },
      rooms: {
         room1: { key: 'room1', name: 'Bedroom 1' },
         room2: { key: 'room2', name: 'Bedroom 2' },
         room3: { key: 'room3', name: 'Bedroom 3' },
         room4: { key: 'room4', name: 'Bathroom' },
         room5: { key: 'room5', name: 'Kitchen' },
         room6: { key: 'room6', name: 'Living Room' },
         room8: { key: 'room8', name: 'Utility' },
         room9: { key: 'room9', name: 'Garage' },
      },
      isUploading: false,
   }

   _onChangeText = (event, type) => {
      const { value } = event.target

      this.setState(prevState => ({
         info: { ...prevState.info, [type]: value },
      }))
   }

   _validation = () => {
      const { info } = this.state

      const requiredInfo = [
         { value: 'name', display: 'Name' },
         { value: 'address1', display: 'Address1' },
         { value: 'city', display: 'City' },
         { value: 'zipcode', display: 'Zipcode' },
         { value: 'state', display: 'State' },
      ]

      const errorArray = []

      requiredInfo.forEach(field => {
         if (!info[field.value] || !info[field.value].length) {
            errorArray.push(field.display)
         }
      })

      if (errorArray.length) {
         return `The following fields are required: ${errorArray.reduce(
            (accum, current) => accum + ', ' + current,
         )}`
      }

      return false
   }

   _submit = async () => {
      const { addNewProperty, onConfirm } = this.props
      const { info, rooms } = this.state

      const validation = await this._validation()

      if (validation) {
         alert(`Missing Info - ${validation}`)
      } else {
         const uniqueID = generateUniqueID()
         const roomsArray = Object.values(rooms)
            .sort(this._sortRooms)
            .map(room => room.name)

         const newProperty = {
            ...info,
            id: uniqueID,
            rooms: roomsArray,
            inventoryTotal: 0,
            requestTotal: 0,
         }

         await addNewProperty(newProperty)
         onConfirm()
      }
   }

   render() {
      const { info } = this.state
      const { open, onCancel } = this.props

      return (
         <div>
            <Dialog open={open} aria-labelledby='form-dialog-title'>
               <DialogTitle id='form-dialog-title'>New Property</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     New Properties include the following rooms: Bedroom 1,
                     Bedroom 2, Bedroom 3, Bathroom, Kitchen, Living Room,
                     Utility, and Garage.
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin='dense'
                     label='Property Name'
                     fullWidth
                     value={info.name}
                     onChange={event => this._onChangeText(event, 'name')}
                  />
                  <TextField
                     margin='dense'
                     label='Address 1'
                     fullWidth
                     value={info.address1}
                     onChange={event => this._onChangeText(event, 'address1')}
                  />
                  <TextField
                     margin='dense'
                     label='Address 2'
                     fullWidth
                     value={info.address2}
                     onChange={event => this._onChangeText(event, 'address2')}
                  />
                  <TextField
                     margin='dense'
                     label='City'
                     fullWidth
                     value={info.city}
                     onChange={event => this._onChangeText(event, 'city')}
                  />
                  <TextField
                     margin='dense'
                     label='State'
                     fullWidth
                     value={info.state}
                     onChange={event => this._onChangeText(event, 'state')}
                  />
                  <TextField
                     margin='dense'
                     label='Zipcode'
                     fullWidth
                     value={info.zipcode}
                     onChange={event => this._onChangeText(event, 'zipcode')}
                  />
               </DialogContent>
               <DialogActions>
                  <Button onClick={onCancel} color='primary'>
                     Cancel
                  </Button>
                  <Button onClick={this._submit} color='primary'>
                     Confirm
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      )
   }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
   addNewProperty: newProperty => dispatch(addNewPropertyAPI(newProperty)),
})

NewProperty = connect(
   mapStateToProps,
   mapDispatchToProps,
)(NewProperty)
export { NewProperty }
