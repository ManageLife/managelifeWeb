import React from 'react'
import { navigate } from '@reach/router'
import Card from '@material-ui/core/Card'
import { IoIosHome } from 'react-icons/io'
import { DropdownIcon } from '../../reusable'
import './index.css'

const PropertyCard = ({
   deleteProperty,
   name,
   address1,
   address2,
   city,
   zipcode,
   state,
   imageSource,
   requestTotal,
   inventoryTotal,
}) => (
   <Card id='property-card'>
      <div id='edit-row'>
         <DropdownIcon
            options={[{ value: 'Remove', onClick: deleteProperty }]}
         />
      </div>
      <div id='upper-propertycard-row' onClick={() => navigate('inventory')}>
         <div id='propertycard-image-container'>
            {imageSource ? (
               <img
                  src={imageSource}
                  alt='property-photo'
                  id='property-image'
               />
            ) : (
               <div id='property-card-placeholder'>
                  <IoIosHome color='#D9D9D9' size='4.5rem' name='ios-home' />
               </div>
            )}
         </div>
         <div id='propertycard-info-container'>
            <p id='property-title-text'>{name}</p>
            <p id='property-info-text'>{address1}</p>
            {address2 && <p id='property-info-text'>{address2}</p>}
            <p id='property-info-text'>
               {city}, {state} {zipcode}
            </p>
         </div>
      </div>
      <div id='lower-propertycard-row'>
         <div className='count-container'>
            <p id='property-info-text'>Inventory: {inventoryTotal}</p>
         </div>
         <div className='count-container'>
            <p id='property-info-text'>Requests: {requestTotal}</p>
         </div>
      </div>
   </Card>
)

export { PropertyCard }
