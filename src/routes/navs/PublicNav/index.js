import React from 'react'
import { NavLinks } from '../NavLinks'
import { links } from '../linksIndex'

function PublicNav() {
   return (
      <span style={styles.span}>
         <NavLinks links={links.visitor} />
      </span>
   )
}

const styles = {
   span: {
      //Override parent
      textAlign: 'left',
   },
}

export { PublicNav }
