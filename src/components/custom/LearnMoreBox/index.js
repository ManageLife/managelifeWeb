import React from 'react'
import { Aside } from 'components/core'
import { Link } from '@reach/router'
import './index.css'

const LearnMoreBox = ({ order, route }) => {
   let header = ''
   let content = ''

   switch (order) {
      case 0:
         header = 'Pioneering greater access to home ownership'
         content =
            'Our members earn equity and maintain flexibility through a new model of home ownership without mortgages, credit scores, or expensive buying and selling transactions.'
         break
      case 1:
         header = 'Enabling corporate social impact for good'
         content =
            'We believe corporations can make conscious decisions about where their outsourcing dollars are spent and how that money is utilized for a greater common good.'
         break
      case 2:
         header = 'Sustainable solutions for healthy & resilient communities'
         content =
            'Families are the building blocks of our communities. By addressing the most common challenges faced by workers and their families, we are able to raise up entire communities.'
         break
      default:
         break
   }

   return (
      <div className='learn-more-container'>
         <p id='learn-more-header-text'>{header}</p>
         <p id='learn-more-text'>{content}</p>
         <Link id='learn-more-button' to={route}>
            Learn More
         </Link>
      </div>
   )
}

export { LearnMoreBox }
