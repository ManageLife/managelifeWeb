import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { IoLogoApple, IoLogoAndroid } from 'react-icons/io'
import './index.css'

const Footer = () => {
   const iconSize = '2rem'
   const iconStyle = {
      height: iconSize,
      width: iconSize,
      margin: '0 0.25rem',
   }

   return (
      <div className='productsite-footer'>
         <div id='footer-divider1' style={{ borderRight: '#FFFFFF 1px solid' }}>
            <div id='social-container'>
               <div id='social-connect'>
                  <p id='footer-text'>CONNECT</p>
               </div>
               <div id='social-row'>
                  <SocialIcon
                     url='https://twitter.com'
                     fgColor='#2c2c2c'
                     bgColor='#A4A8AB'
                     style={iconStyle}
                  />
                  <SocialIcon
                     url='https://facebook.com'
                     fgColor='#2c2c2c'
                     bgColor='#A4A8AB'
                     style={iconStyle}
                  />
                  <SocialIcon
                     url='https://linkedin.com'
                     fgColor='#2c2c2c'
                     bgColor='#A4A8AB'
                     style={iconStyle}
                  />
                  <SocialIcon
                     url='https://youtube.com'
                     fgColor='#2c2c2c'
                     bgColor='#A4A8AB'
                     style={iconStyle}
                  />
               </div>
            </div>
         </div>
         <div id='footer-divider2'>
            <div id='contact-container'>
               <p id='footer-text'>CONTACT</p>
               <p id='emphasized-text'>managelifedev@gmail.com</p>
            </div>
            <div>
               <p id='footer-text'>DOWNLOAD</p>
               <div id='download-container'>
                  <a
                     className='download-button'
                     href='https://apps.apple.com/app/id1252401569'
                     target='_blank'
                  >
                     <IoLogoApple color='#2c2c2c' size='1.4rem' />
                  </a>
                  <a
                     className='download-button'
                     href='https://play.google.com/store/apps/details?id=com.managelife.managelifeMobile'
                     target='_blank'
                  >
                     <IoLogoAndroid color='#2c2c2c' size='1.4rem' />
                  </a>
               </div>
            </div>
         </div>
         {/* &copy; {year()}, {businessName} */}
      </div>
   )
}

export { Footer }
