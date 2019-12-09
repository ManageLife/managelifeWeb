import React from 'react'
import { Link } from '../NavLinks'

const ActionFormNav = props => (
   <nav>
      <Link to='/action/property'>Add a New Property</Link>
      <br />
      <Link to='/action/inventory'>Create an Inventory Item</Link>
      <br />
      <Link to='/action/service-request'>Create a New Service Request</Link>
      <br />
      <Link to='/action/product-request'>Request a Product</Link>
   </nav>
)

export { ActionFormNav }
