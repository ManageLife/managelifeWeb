import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AlertPopup } from 'components/utility'
import { Link, navigate } from '@reach/router'
import { COLORS } from 'config/styles/colors'
import { logoutUserAPI } from '../../../redux'
import './index.css'

const backgroundStyles = {
   '/': {
      url:
         'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      style: {
         backgroundPosition: '50% 24%',
         minHeight: '50vh',
      },
   },
   '/about': {
      url:
         'https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      style: {
         minHeight: '50vh',
      },
   },
   '/partnerships': {
      url:
         'https://images.pexels.com/photos/1645634/pexels-photo-1645634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      style: {
         minHeight: '50vh',
      },
   },
   '/auth': {
      url:
         'https://images.pexels.com/photos/1624565/pexels-photo-1624565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      blueLogo: true,
   },
   '/properties': {
      url:
         'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      optionsColor: COLORS.WHITE,
   },
   '/feed': {
      url:
         'https://images.pexels.com/photos/1780357/pexels-photo-1780357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      optionsColor: COLORS.WHITE,
   },
   '/inventory': {
      url:
         'https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      blueLogo: true,
   },
}

const coverStyling = locationStr => {
   const tempURL = window.location.href
   const tempURLSplit = tempURL.split('/')
   const tempRoute = tempURLSplit[tempURLSplit.length - 1]
   let location
   if (!tempURLSplit[3] || !tempURLSplit[3].length) {
      location = '/'
   } else {
      location = `/${tempRoute}`
   }
   console.log(location)

   const headerOptions = backgroundStyles[location]

   const { url } = headerOptions || null

   return {
      backgroundBanner: {
         backgroundImage: url ? `url(${url})` : 'none',
         backgroundColor: url ? COLORS.PRIMARY_LIGHT : 'none',
         width: '100%',
         minHeight: '40vh',
         backgroundPosition: '0% 45%',
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         ...headerOptions.style,
      },
      optionsColor: headerOptions.optionsColor || COLORS.SECONDARY,
      headerNameColor: headerOptions.blueLogo ? COLORS.SECONDARY : COLORS.WHITE,
      logo: headerOptions.blueLogo
         ? require('assets/images/png/ml_logo_blue.png')
         : require('assets/images/png/ml_logo_white.png'),
   }
}

function Header() {
   const dispatch = useDispatch()
   const [alertVisible, switchAlert] = useState(false)
   const toggleAlert = () => switchAlert(!alertVisible)
   const logUserOut = async () => {
      toggleAlert()
      await dispatch(logoutUserAPI())
      navigate('/auth')
   }

   const location = useSelector(({ appData }) => {
      if (appData && appData.location) {
         return appData.location.pathname
      }
      return null
   })
   const userID = useSelector(({ user }) => {
      if (user && user.userID) {
         return user.userID
      }
      return null
   })

   let headerOptions
   if (userID && userID.length) {
      headerOptions = [
         { display: 'FEED', route: 'feed' },
         { display: 'PROPERTIES', route: 'properties' },
         { display: 'INVENTORY', route: 'inventory' },
         { display: 'LOG OUT', route: 'auth', onClick: toggleAlert },
      ]
   } else {
      headerOptions = [
         { display: 'ABOUT', route: 'about' },
         { display: 'PARTNERSHIPS', route: 'partnerships' },
         { display: 'LOGIN', route: 'auth' },
      ]
   }

   const {
      backgroundBanner,
      optionsColor,
      headerNameColor,
      logo,
   } = coverStyling(location)

   return (
      <div style={backgroundBanner}>
         <div className='header-container'>
            <Link className='header-title' to='/'>
               <img src={logo} alt='ml-logo' id='header-logo' />
               <p id='header-text' style={{ color: headerNameColor }}>
                  Manage<span id='bold-title-text'>Life</span>
               </p>
            </Link>
            <div className='header-options'>
               {headerOptions.map((option, index) => (
                  <div
                     key={`${option.display}${index}`}
                     style={{ color: optionsColor }}
                     id='option-container'
                     onClick={() => {
                        if (!option.route) {
                           alert('Coming Soon!')
                        } else if (option.onClick) {
                           option.onClick()
                        } else {
                           navigate(option.route)
                        }
                     }}
                  >
                     <p>{option.display}</p>
                  </div>
               ))}
            </div>
         </div>
         <AlertPopup
            onCancel={toggleAlert}
            onConfirm={logUserOut}
            open={alertVisible}
            title='Are you sure you want to log out?'
         />
      </div>
   )
}
export { Header }
