import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
import { Footer } from '../../../components/custom'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

const Home = () => (
   <div>
      <Page1 />
      <Page2 />
      <Footer />
      <ScrollUpButton />
   </div>
)

export { Home }
