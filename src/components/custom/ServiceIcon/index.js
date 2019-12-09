import React from 'react'
import {
   IoIosHome,
   IoIosCar,
   IoIosDesktop,
   IoIosHammer,
   IoIosBusiness,
   IoIosCart,
   IoIosGift,
} from 'react-icons/io'
import './index.css'

const ServiceIcon = ({ type, marginBottom }) => {
   let Icon = IoIosHome
   let iconColor = '#262626'
   switch (type) {
      case 'home':
         Icon = IoIosHome
         iconColor = '#159ED9'
         break
      case 'car':
         Icon = IoIosCar
         iconColor = '#804097'
         break
      case 'tech':
         Icon = IoIosDesktop
         iconColor = '#DC3327'
         break
      case 'tools':
         Icon = IoIosHammer
         iconColor = '#B2D235'
         break
      case 'business':
         Icon = IoIosBusiness
         break
      case 'cart':
         Icon = IoIosCart
         break
      case 'gift':
         Icon = IoIosGift
         break
      default:
         break
   }

   return (
      <div
         className='service-icon-container'
         style={{
            background: iconColor,
            marginBottom: marginBottom ? '0.25rem' : null,
         }}
      >
         <Icon color='#FFFFFF' size='4.5rem' />
      </div>
   )
}

export { ServiceIcon }
