import React from 'react'
import { NavLinks } from '../NavLinks'
import { links } from '../linksIndex'

function PrivateNav() {
   return (
      <>
         <NavLinks links={links.member} />
      </>
   )
}

export { PrivateNav }
