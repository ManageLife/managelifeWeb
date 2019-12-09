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
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import { connect } from 'react-redux'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { generateUniqueID } from '../../../../utils'
import { sendRequestEmail } from '../../../../utils/firestoreHelpers'
import { addNewRequestAPI } from '../../../../redux/API/requests'
import './index.css'

const startTime = moment()
   .endOf('d')
   .add(9, 'h')
   .add(1, 'm')

class NewRequest extends PureComponent {
   state = {
      info: {
         description: null,
         property: null,
         item: null,
         date: startTime.toDate(),
         image: { local: null, firebase: null },
      },
   }

   _onChangeText = (event, type) => {
      const { value } = event.target

      this.setState(prevState => ({
         info: { ...prevState.info, [type]: value },
      }))
   }

   _onChangeTime = time => {
      this.setState(prevState => ({
         info: { ...prevState.info, date: time.toDate() },
      }))
   }

   _filterItems = property => {
      const { inventory } = this.props
      const inventoryList = property
         ? inventory
              .filter(item => item.property.name === property)
              .map(item => ({
                 label: `${item.name} (${item.room})`,
                 value: item,
              }))
         : []

      return inventoryList
   }

   _validation = () => {
      const { info } = this.state

      const requiredInfo = [
         { value: 'description', display: 'Description' },
         { value: 'property', display: 'Property' },
         { value: 'item', display: 'Item' },
         { value: 'date', display: 'Date' },
      ]

      const errorArray = []

      requiredInfo.forEach(field => {
         if (field.value === 'property' || field.value === 'item') {
            if (!info[field.value] || !info[field.value].name) {
               errorArray.push(field.display)
            }
         } else if (field.value === 'date') {
            if (!info[field.value]) {
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
      const { addNewRequest, user, onConfirm, selectedItem } = this.props

      const validation = await this._validation()

      if (validation) {
         alert(`Missing Info - ${validation}`)
      } else {
         const submitProperty = selectedItem
            ? selectedItem.property
            : info.property
         const submitItem = selectedItem ? selectedItem : info.item

         const uniqueID = await generateUniqueID()
         const emailInfo = {
            email: user.email,
            username: `${user.firstName} ${user.lastName}` || 'N/A',
            phoneNumber: user.phoneNumber || 'N/A',
            property: submitProperty.property.name || 'N/A',
            item: submitItem.item.name || 'N/A',
            address:
               `${info.property.address1}, ${info.property.city} ${info.property.zipcode}` ||
               'N/A',
            room: info.item.room || 'N/A',
            description: info.description || 'N/A',
            time: info.date
               ? moment(info.date).format('MMM Do, h:mm a')
               : 'N/A',
            requestID: uniqueID,
         }
         await addNewRequest({
            ...info,
            status: 'processing',
            id: uniqueID,
            item: submitItem,
            property: submitProperty,
         })
         sendRequestEmail(emailInfo)
         onConfirm()
      }
      onConfirm()
   }

   render() {
      const { info } = this.state
      const { open, onCancel, properties, selectedItem } = this.props

      return (
         <div>
            <Dialog open={open} aria-labelledby='form-dialog-title'>
               <DialogTitle id='form-dialog-title'>
                  New Service Request
               </DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     Enter a description of the problem and the time you'd like
                     a ManageLife technician to swing by your property.
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin='dense'
                     label='Description'
                     fullWidth
                     value={info.description}
                     onChange={event =>
                        this._onChangeText(event, 'description')
                     }
                  />
                  <InputLabel shrink>Property</InputLabel>
                  {selectedItem ? (
                     <TextField
                        margin='dense'
                        fullWidth
                        value={selectedItem.property.name}
                        disabled
                     />
                  ) : (
                     <Select
                        fullWidth
                        margin='dense'
                        value={info.property}
                        onChange={event =>
                           this._onChangeText(event, 'property')
                        }
                        style={{ marginBottom: '0.5rem' }}
                     >
                        {properties.map(property => (
                           <MenuItem key={property.id} value={property}>
                              {property.name}
                           </MenuItem>
                        ))}
                     </Select>
                  )}
                  <InputLabel shrink>Item</InputLabel>
                  {selectedItem ? (
                     <TextField
                        margin='dense'
                        fullWidth
                        value={selectedItem.name}
                        disabled
                     />
                  ) : (
                     <Select
                        fullWidth
                        margin='dense'
                        value={info.item}
                        onChange={event => this._onChangeText(event, 'item')}
                        disabled={!info.property}
                     >
                        {info.property &&
                           this._filterItems(info.property.name).map(item => (
                              <MenuItem key={item.value.id} value={item.value}>
                                 {item.label}
                              </MenuItem>
                           ))}
                     </Select>
                  )}
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                     <DateTimePicker
                        fullWidth
                        disableToolbar
                        variant='inline'
                        margin='dense'
                        label='When would you like that done?'
                        value={info.date}
                        onChange={time => this._onChangeTime(time)}
                     />
                  </MuiPickersUtilsProvider>
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
   user: state.user,
   properties: Object.values(state.properties),
   inventory: Object.values(state.inventory),
})

const mapDispatchToProps = dispatch => ({
   addNewRequest: newRequest => dispatch(addNewRequestAPI(newRequest)),
})

NewRequest = connect(
   mapStateToProps,
   mapDispatchToProps,
)(NewRequest)

export { NewRequest }
