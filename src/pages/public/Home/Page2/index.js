import React from 'react'
import { LearnMoreBox } from 'components/custom'
import './index.css'

const Page2 = () => (
   <div className='page2-container'>
      <img
         id='rc-1-1'
         alt='fam-1'
         src='https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?cs=srgb&dl=baby-beautiful-beauty-377058.jpg&fm=jpg'
      />
      <div id='rc-1-2'>
         <LearnMoreBox order={0} route='/about' />
      </div>
      <div id='rc-2-1'>
         <LearnMoreBox order={1} route='/partnerships' />
      </div>
      <img
         alt='fam-2'
         id='rc-2-2'
         src='https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <img
         alt='couple-1'
         id='rc-3-1'
         src='https://images.pexels.com/photos/1470110/pexels-photo-1470110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <div id='rc-3-2'>
         <LearnMoreBox order={2} route='/about' />
      </div>
   </div>
)

export { Page2 }
