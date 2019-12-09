import React from 'react'
import Card from '@material-ui/core/Card'
import { IoIosClock, IoIosThumbsUp } from 'react-icons/io'
import { SubheaderText, Text } from '../Text'
import { DropdownIcon } from '../../reusable'
import { COLORS } from '../../../config/styles'
import './index.css'

const FeedCard = ({ property, requests, deleteRequest }) => (
   <div>
      <SubheaderText>{property}</SubheaderText>
      {requests.length ? (
         requests.map(request => (
            <Card id='feed-card' key={request.id}>
               <div id='feed-edit-row'>
                  <DropdownIcon
                     options={[
                        {
                           value: 'Cancel',
                           onClick: () =>
                              deleteRequest({
                                 requestId: request.id,
                                 propertyId: request.propertyId,
                              }),
                        },
                     ]}
                  />
               </div>
               <div id='upper-feedcard-row'>
                  <IoIosClock
                     name='ios-clock'
                     color='#17519e'
                     style={{ marginRight: '10px' }}
                     size='1.5rem'
                  />
                  <Text style={{ color: COLORS.SECONDARY }}>
                     {request.title}
                  </Text>
               </div>
               <div id='lower-feedcard-row'>
                  <Text>{request.description}</Text>
               </div>
            </Card>
         ))
      ) : (
         <Card id='placeholder-feed-card'>
            <IoIosThumbsUp
               color='#17519e'
               style={{ marginRight: '10px' }}
               size='1.5rem'
            />
            <Text style={{ color: COLORS.SECONDARY, fontWeight: 'bold' }}>
               Nothing to report!
            </Text>
         </Card>
      )}
   </div>
)

export { FeedCard }
