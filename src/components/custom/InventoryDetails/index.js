import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { IoIosImage } from 'react-icons/io'
import './index.css'

class InventoryDetails extends PureComponent {
   render() {
      const { open, onCancel, openRequest, item } = this.props

      const data = {
         name: 'N/A',
         brand: 'N/A',
         modelNumber: 'N/A',
         serialNumber: 'N/A',
         image: null,
      }

      if (item) {
         data.name = item.name
         data.brand = item.brand || 'N/A'
         data.modelNumber =
            item.modelNumber && !item.modelNumber.remote
               ? item.modelNumber
               : 'N/A'
         data.serialNumber =
            item.serialNumber && !item.serialNumber.remote
               ? item.serialNumber
               : 'N/A'
         data.image = item.image.remote || null
      }

      return (
         <div>
            <Dialog
               open={open}
               aria-labelledby='alert-dialog-title'
               aria-describedby='alert-dialog-description'
               id='item-dialog-container'
            >
               <DialogTitle id='alert-dialog-title'>{data.name}</DialogTitle>
               <DialogContent>
                  <div id='item-data-container'>
                     <DialogContentText id='alert-dialog-description'>
                        <span style={{ fontWeight: 'bold' }}>Brand:</span>
                        {data.brand}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>
                           Serial Number:
                        </span>
                        {data.serialNumber}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>
                           Model Number:
                        </span>
                        {data.modelNumber}
                        <br />
                     </DialogContentText>
                  </div>
                  <div id='item-image-container'>
                     {data.image ? (
                        <img
                           src={data.image}
                           alt='item-photo'
                           id='item-image'
                        />
                     ) : (
                        <div id='item-card-placeholder'>
                           <IoIosImage
                              color='#D9D9D9'
                              size='4.5rem'
                              name='ios-home'
                           />
                        </div>
                     )}
                  </div>
               </DialogContent>
               <DialogActions>
                  <Button onClick={onCancel} color='primary'>
                     Close
                  </Button>
                  <Button
                     onClick={() => {
                        openRequest(item)
                     }}
                     color='primary'
                  >
                     New Request
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      )
   }
}

export { InventoryDetails }
