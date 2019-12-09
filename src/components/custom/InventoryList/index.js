import React from 'react'
import Card from '@material-ui/core/Card'
import { SubheaderText, Text } from '../Text'
import { COLORS } from '../../../config/styles'
import './index.css'

const InventoryList = ({ propertyName, rooms, onClick }) => (
   <div>
      <SubheaderText>{propertyName}</SubheaderText>
      <Card id='inventory-list-card'>
         {rooms.map(room => (
            <div key={`${room.title}`}>
               <div className='inventory-item' id='room-name'>
                  <Text style={{ color: COLORS.SECONDARY, fontWeight: '600' }}>
                     {room.title} ({room.inventory.length})
                  </Text>
               </div>
               {room.inventory.length
                  ? room.inventory.map(item => (
                       <div
                          key={item.id}
                          className='inventory-item'
                          id='item'
                          onClick={() => onClick(item)}
                       >
                          <Text>
                             -{item.name} ({item.category})
                          </Text>
                       </div>
                    ))
                  : null}
            </div>
         ))}
      </Card>
   </div>
)

export { InventoryList }
