import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
import { Header, ServiceIcon, Footer } from 'components/custom'
import './index.css'

const Partnerships = () => (
   <div>
      <div className='corporations-container'>
         <div className='corporations-info-container'>
            <p className='corporations-subheader-text'>
               <span className='corporations-header-text'>
                  Leading with a Purpose:
               </span>
               <br />
               Re-thinking the role of for-profit corporations
               <br /> as agents for social impact
            </p>
            <p className='corporations-text-box'>
               We partner with some of the largest corporations and
               organizations who share our values and vision to build a better
               tomorrow. Through the mutually beneficial relationship with these
               partners, our members and their families are empowered to access
               essential services that enable them to live better lives.
            </p>
         </div>
         <div className='benefits-wrap'>
            <div id='benefits-container'>
               <div className='benefits-icon-container'>
                  <ServiceIcon type='business' />
               </div>
               <div className='benefits-info-container'>
                  <p>
                     <span id='bold-text'>Corporate Award Partnerships</span>
                     <br />
                     Our corporate award partners channel business awards in
                     pre-defined service areas into the program. 98% of all net
                     profits from these corporate awards partnerships are
                     directed to funding our member programs.
                  </p>
               </div>
               <div className='benefits-icon-container'>
                  <ServiceIcon type='cart' />
               </div>
               <div className='benefits-info-container'>
                  <p>
                     <span id='bold-text'>Product & Service Partnerships</span>
                     <br />
                     The ManageLife program utilizes mass purchases of products
                     and services to fulfill the needs of its membership. Our
                     product and service partners leverage this market for
                     high-volume sales while our members benefit from group
                     pricing rates.
                  </p>
               </div>
               <div className='benefits-icon-container'>
                  <ServiceIcon type='gift' />
               </div>
               <div className='benefits-info-container'>
                  <span id='bold-text'>Foundation Donations</span>
                  The ManageLife Foundation accepts monetary donations of any
                  size. 100% of these donations go toward home purchases for
                  members.
               </div>
            </div>
         </div>
         <div className='corporations-info-container'>
            <p className='corporations-header-text'>Become a Partner</p>
            <p className='corporations-text-box'>
               No longer is corporate philanthropy an afterthought or an add-on
               for today’s leading organizations. These big thinkers are focused
               on big ideas to incorporate life-changing social impact into
               their corporate strategies at all levels of business.
               <br />
               <br />
               Join us in being an agent of good in generating inclusive
               economic empowerment through creative strategic initiatives.
               Together, we can lift up our communities today and the future
               generations of tomorrow.
            </p>
         </div>
         <div className='faqs-container'>
            <p
               className='corporations-header-text'
               style={{ borderTop: '#d9d9d9 2px solid', paddingTop: '2%' }}
            >
               Frequently Asked Questions
            </p>
            <p className='corporations-text-box' id='bold-text'>
               Coming Soon!
            </p>
         </div>
      </div>
      <Footer />
      <ScrollUpButton />
   </div>
)

export { Partnerships }
