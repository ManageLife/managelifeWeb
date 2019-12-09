import React, { PureComponent } from 'react'
import { Container, Button } from 'react-floating-action-button'
import {
   IoMdHome,
   IoIosCart,
   IoMdHammer,
   IoMdCreate,
   IoIosAdd,
} from 'react-icons/io'
import {
   NewProperty,
   NewItem,
   NewRequest,
} from '../../../pages/private/ActionModals'
import { COLORS } from '../../../config/styles'
import './index.css'

class AddButtons extends PureComponent {
   state = {
      newPropertyVisible: false,
      newItemVisible: false,
      newServiceRequestVisible: false,
   }

   _toggleModal = type => {
      this.setState(prevState => ({ [type]: !prevState[type] }))
   }

   render() {
      const {
         newPropertyVisible,
         newItemVisible,
         newServiceRequestVisible,
      } = this.state
      const {
         selectedItem,
         inventoryPage,
         inventoryRequestVisible,
         inventoryRequestToggle,
      } = this.props

      return (
         <div className='floating-add-button'>
            <Container>
               <Button
                  tooltip='New Property'
                  onClick={() => this._toggleModal('newPropertyVisible')}
                  styles={{ background: COLORS.PURPLE }}
               >
                  <IoMdHome name='md-home' size={25} color={COLORS.WHITE} />
               </Button>
               <Button
                  tooltip='New Item'
                  onClick={() => this._toggleModal('newItemVisible')}
                  styles={{ background: COLORS.TURQUOISE }}
               >
                  <IoMdCreate name='md-home' size={25} color={COLORS.WHITE} />
               </Button>
               <Button
                  tooltip='Service Request '
                  onClick={() => this._toggleModal('newServiceRequestVisible')}
                  styles={{ background: COLORS.GREEN }}
               >
                  <IoMdHammer name='md-home' size={25} color={COLORS.WHITE} />
               </Button>
               <Button
                  tooltip='Product Request'
                  onClick={() => alert('Coming Soon!')}
                  styles={{ background: COLORS.ORANGE }}
               >
                  <IoIosCart name='md-home' size={25} color={COLORS.WHITE} />
               </Button>
               <Button rotate styles={{ background: COLORS.RED }}>
                  <IoIosAdd size={25} color={COLORS.WHITE} />
               </Button>
            </Container>
            <NewProperty
               open={newPropertyVisible}
               onCancel={() => this._toggleModal('newPropertyVisible')}
               onConfirm={() => this._toggleModal('newPropertyVisible')}
            />
            <NewItem
               open={newItemVisible}
               onCancel={() => this._toggleModal('newItemVisible')}
               onConfirm={() => this._toggleModal('newItemVisible')}
            />
            <NewRequest
               open={
                  inventoryPage && selectedItem
                     ? inventoryRequestVisible
                     : newServiceRequestVisible
               }
               onCancel={() => {
                  if (selectedItem) {
                     inventoryRequestToggle()
                  } else {
                     this._toggleModal('newServiceRequestVisible')
                  }
               }}
               onConfirm={() => {
                  if (selectedItem) {
                     inventoryRequestToggle()
                  } else {
                     this._toggleModal('newServiceRequestVisible')
                  }
               }}
               selectedItem={selectedItem || null}
            />
         </div>
      )
   }
}

export { AddButtons }
