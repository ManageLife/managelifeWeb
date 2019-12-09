import React from 'react'
import './index.css'

const HeaderText = ({ children, style }) => (
   <p className='header-text' style={{ ...style }}>
      {children}
   </p>
)

const SubheaderText = ({ children }) => (
   <p className='subheader-text'>{children}</p>
)

const Text = ({ children, style }) => (
   <p className='normal-text' style={{ ...style }}>
      {children}
   </p>
)

export { HeaderText, SubheaderText, Text }
