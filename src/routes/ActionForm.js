import React from 'react'
import { Router } from '@reach/router'
import {
   PropertyForm,
   InventoryForm,
   ProductRequestForm,
   ServiceRequestForm,
} from 'pages/private/ActionForm'

function ActionForm() {
   return (
      <Router>
         <PropertyForm path='property' />
         <InventoryForm path='inventory' />
         <ServiceRequestForm path='service-request' />
         <ProductRequestForm path='product-request' />
      </Router>
   )
}

export { ActionForm }
