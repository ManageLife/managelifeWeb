import React from 'react'
import { Link } from '@reach/router'
import { businessName } from 'config/business'

const Error = () => (
   <div>
      <h1>Error</h1>
      <p>Oh no! This page doesn't exist!</p>
      <Link to='/'>Click here to go back to {businessName}</Link>
   </div>
)

export { Error }
