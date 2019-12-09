import React from 'react'
import { InfoBox } from 'components/custom'
import './index.css'

const Page1 = () => (
   <div className='page1-container'>
      <div className='page1-lower-container'>
         <div className='lower-container-info'>
            <p id='lower-container-info-header-text'>
               Where business innovation meets social transformation.
            </p>
            <p id='lower-container-info-text'>
               ManageLife has pioneered a bold and innovative approach to
               address inequality by pairing the interests of working-class
               members with civically-minded Fortune 500 corporations to provide
               opportunities for home ownership, stronger communities, and a
               better life for all.
            </p>
         </div>
         <div className='lower-container-boxes'>
            <InfoBox icon='business' route='/partnerships' />
            <InfoBox icon='heart' route='/auth' />
            <InfoBox icon='people' route='/about' />
         </div>
      </div>
   </div>
)

export { Page1 }
