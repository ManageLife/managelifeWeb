import React from 'react'
import { Link } from '@reach/router'
import {
   IoMdBusiness,
   IoIosHeart,
   IoMdPeople,
   IoIosArrowRoundForward,
} from 'react-icons/io'
import './index.css'

const InfoBox = ({ icon, route }) => {
   let Icon, text

   switch (icon) {
      case 'business':
         Icon = IoMdBusiness
         text = 'Corporate business opportunities'
         break
      case 'heart':
         Icon = IoIosHeart
         text = 'Become a member'
         break
      case 'people':
         Icon = IoMdPeople
         text = 'Current member resources'
         break
      default:
         Icon = IoMdBusiness
         break
   }

   return (
      <Link
         className='info-box-container'
         to={route}
         onClick={() => {
            if (!route) {
               alert('Coming Soon!')
            }
         }}
      >
         <div id='upper-content-container'>
            <div id='left-icon-container'>
               <Icon color='#17519e' size='4rem' />
            </div>
            <div id='right-text-container'>
               <p id='right-text'>{text}</p>
            </div>
         </div>
         <div id='bottom-icon-container'>
            <IoIosArrowRoundForward color='#17519e' size='3rem' />
         </div>
      </Link>
   )
}
export { InfoBox }
