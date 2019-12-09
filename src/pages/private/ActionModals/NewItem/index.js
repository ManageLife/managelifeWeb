import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { connect } from 'react-redux'
import { generateUniqueID } from '../../../../utils'
import { addNewItemAPI } from '../../../../redux/API/inventory'
import './index.css'

class NewItem extends PureComponent {
   state = {
      info: {
         name: null,
         category: null,
         brand: null,
         serialNumber: null,
         modelNumber: null,
         color: null,
         property: null,
         room: null,
         image: { uri: null, base64: null },
      },
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
         { value: 'category', display: 'Category' },
         { value: 'property', display: 'Property' },
         { value: 'room', display: 'Room' },
      ]

      const errorArray = []

      requiredInfo.forEach(field => {
         if (field.value === 'property') {
            if (!info[field.value] || !info[field.value].name) {
               errorArray.push(field.display)
            }
         } else {
            if (!info[field.value] || !info[field.value].length) {
               errorArray.push(field.display)
            }
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
      const { info } = this.state
      const { addNewItem, onConfirm } = this.props

      const validation = await this._validation()

      if (validation) {
         alert(`Missing Info - ${validation}`)
      } else {
         const uniqueID = generateUniqueID()

         const newItem = {
            ...info,
            property: info.property,
            id: uniqueID,
         }

         await addNewItem(newItem)
         window.location.reload(false)
         // onConfirm()
      }
   }

   render() {
      const { info } = this.state
      const { open, onCancel, itemCategories, properties } = this.props

      return (
         <div>
            <Dialog open={open} aria-labelledby='form-dialog-title'>
               <DialogTitle id='form-dialog-title'>New Item</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     Please select the property and room to which the item
                     belongs. You can add photos from the mobile app.
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin='dense'
                     label='Item Name'
                     fullWidth
                     value={info.name}
                     onChange={event => this._onChangeText(event, 'name')}
                  />
                  <InputLabel shrink>Category</InputLabel>
                  <Select
                     fullWidth
                     margin='dense'
                     value={info.category}
                     onChange={event => this._onChangeText(event, 'category')}
                  >
                     {itemCategories.map(category => (
                        <MenuItem key={category} value={category}>
                           {category}
                        </MenuItem>
                     ))}
                  </Select>
                  <TextField
                     margin='dense'
                     label='Brand'
                     fullWidth
                     value={info.address1}
                     onChange={event => this._onChangeText(event, 'brand')}
                  />
                  <TextField
                     margin='dense'
                     label='Serial Number'
                     fullWidth
                     value={info.address2}
                     onChange={event =>
                        this._onChangeText(event, 'serialNumber')
                     }
                  />
                  <TextField
                     margin='dense'
                     label='Model Number'
                     fullWidth
                     value={info.city}
                     onChange={event =>
                        this._onChangeText(event, 'modelNumber')
                     }
                  />
                  <TextField
                     margin='dense'
                     label='Color'
                     fullWidth
                     value={info.state}
                     onChange={event => this._onChangeText(event, 'color')}
                  />
                  <InputLabel shrink>Property</InputLabel>
                  <Select
                     fullWidth
                     margin='dense'
                     value={info.property}
                     onChange={event => this._onChangeText(event, 'property')}
                     style={{ marginBottom: '0.5rem' }}
                  >
                     {properties.map(property => (
                        <MenuItem key={property.id} value={property}>
                           {property.name}
                        </MenuItem>
                     ))}
                  </Select>
                  <InputLabel shrink>Room</InputLabel>
                  <Select
                     fullWidth
                     margin='dense'
                     value={info.room}
                     onChange={event => this._onChangeText(event, 'room')}
                     disabled={!info.property}
                  >
                     {info.property &&
                        info.property.rooms.map(room => (
                           <MenuItem key={room} value={room}>
                              {room}
                           </MenuItem>
                        ))}
                  </Select>
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

const mapStateToProps = state => ({
   itemCategories: state.user.itemCategories,
   properties: Object.values(state.properties),
})

const mapDispatchToProps = dispatch => ({
   addNewItem: newItem => dispatch(addNewItemAPI(newItem)),
})

NewItem = connect(
   mapStateToProps,
   mapDispatchToProps,
)(NewItem)
export { NewItem }
