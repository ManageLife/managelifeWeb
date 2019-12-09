import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class AlertPopup extends PureComponent {
   render() {
      const {
         open,
         onCancel,
         onConfirm,
         title,
         children,
         singleButton,
      } = this.props

      return (
         <div>
            <Dialog
               open={open}
               aria-labelledby='alert-dialog-title'
               aria-describedby='alert-dialog-description'
            >
               <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
               <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                     {children}
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={onCancel} color='primary'>
                     {singleButton ? 'Okay' : 'Cancel'}
                  </Button>
                  {!singleButton && (
                     <Button onClick={onConfirm} color='primary' autoFocus>
                        Confirm
                     </Button>
                  )}
               </DialogActions>
            </Dialog>
         </div>
      )
   }
}

export { AlertPopup }
