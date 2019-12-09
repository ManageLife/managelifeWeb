import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
import { Header, ServiceIcon, Footer } from 'components/custom'
import './index.css'

const About = () => (
   <div>
      <div className='families-container'>
         <div className='families-info-container'>
            <p className='families-header-text'>Empowering Families</p>
            <p className='families-text-box'>
               We believe that families today are facing crucial challenges to
               meet essential needs such as housing, transportation, financial
               stability, and access to technology.
               <br />
               <br />
               ManageLife places a value on humanity by working improve the
               lives of every member. We do this by providing our members with
               lifetime support to achieve their goals. We purchase homes and
               vehicles for working-class Americans and allow them to
               rent-to-own, receiving equity through our unique program.
            </p>
         </div>
         <div className='families-info-container'>
            <p className='families-subheader-text'>
               Challenges faced by today's families
            </p>
            <div id='challenges-row'>
               <p className='challenges-container'>
                  <span id='bold-text-about'>HOME OWNERSHIP</span>
                  <br />
                  is out of reach for many working Americans
               </p>
               <p className='challenges-container'>
                  <span id='bold-text-about'>VEHICLE OWNERSHIP</span>
                  <br />
                  is a necessity some families go without
               </p>
               <p className='challenges-container'>
                  <span id='bold-text-about'>TECHNOLOGY ACCESS</span>
                  <br />
                  inequality impedes education and job access
               </p>
               <p className='challenges-container'>
                  <span id='bold-text-about'>UNFORESEEN EXPENSES</span>
                  <br />
                  such as medical bills, home, or auto repairs
               </p>
            </div>
         </div>
         <div className='families-info-container'>
            <p className='families-subheader-text'>What we work to address</p>
            <p className='families-text-box'>
               To respond to these issues, ManageLife provides service in 4
               interconnected areas pertaining to the home and family that,
               together, enable a better life for our members.
            </p>
            <div id='address-row'>
               <div className='address-container'>
                  <ServiceIcon type='home' marginBottom />
                  <span id='bold-text-about'>Home</span>
                  We provide home ownership to our members, giving them a safe
                  and stable environment for their families while building
                  equity.
               </div>
               <div className='address-container'>
                  <ServiceIcon type='car' marginBottom />
                  <span id='bold-text-about'>Vehicle</span>
                  Our members can pursue vehicle ownership, enabling reliable
                  and safe transportation to work, school, medical care
                  activities.
               </div>
               <div className='address-container'>
                  <ServiceIcon type='tech' marginBottom />
                  <span id='bold-text-about'>Technology</span>
                  Essential home technologies are included as standard in our
                  homes, ensuring fair access for education, work, and daily
                  needs. equity.
               </div>
               <div className='address-container'>
                  <ServiceIcon type='tools' marginBottom />
                  <span id='bold-text-about'>Maintenance</span>
                  The burden of unexpected repairs and service is alleviated
                  through reduced-cost maintenance and payments.
               </div>
            </div>
         </div>
         <div className='families-info-container'>
            <p className='families-subheader-text'>How we work</p>
            <p className='families-text-box'>
               We partner with some of the largest corporations and
               organizations who share our values and vision. Through the
               mutually beneficial relationship with these partners, our members
               and their families are empowered to access essential services
               that enable them to live better lives.
            </p>
            <div id='how-row'>
               <div className='how-card'>
                  <span id='bold-text-about'>Foundation</span> <br />
                  100% of donations to our nonprofit foundation go toward home
                  purchases for members.
               </div>
               <div className='how-card'>
                  <span id='bold-text-about'>Corporate Partnerships</span>{' '}
                  <br />
                  98% of all net profits from our corporate awards are directed
                  toward our member programs.
               </div>
               <div className='how-card'>
                  <span id='bold-text-about'>Group Purchasing</span> <br />
                  Mass product and service purchases through our program demand
                  better pricing as a group.
               </div>
            </div>
         </div>
      </div>
      <Footer />
      <ScrollUpButton />
   </div>
)

export { About }
