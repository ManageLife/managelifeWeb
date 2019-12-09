import React from 'react'
import { Link as RouterLink } from '@reach/router'
// Redux
import { useSelector } from 'react-redux'
//
import { capitalize } from 'utils'

function NavLinks({ links, location }) {
   const appLocation = useSelector(state => state.appData.location.pathname)
   // Replace '/' with "Home" strings
   const checkIfHome = str => (str === '/' ? '/home' : str)
   // Replace requests with "Feed" strings
   const checkIfRequests = str => (str === '/requests' ? '/feed' : str)
   return (
      <span>
         {links.map((path, index) => {
            let separator = index !== links.length - 1 ? ' | ' : ''
            let link = capitalize(checkIfRequests(checkIfHome(path)).slice(1))
            if (path !== appLocation) {
               return (
                  <RouterLink to={path} key={link}>
                     {link + separator}
                  </RouterLink>
               )
            } else {
               return link + separator
            }
         })}
      </span>
   )
}

const Link = props => (
   <RouterLink
      {...props}
      getProps={({ isCurrent }) => {
         if (isCurrent) {
            return props.linkText
         } else {
            return <RouterLink {...props} />
         }
      }}
   />
)

export { NavLinks, Link }
