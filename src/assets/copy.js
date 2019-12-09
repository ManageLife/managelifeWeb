import React from 'react'
import { images } from './images'
import {
   IoMdBusiness,
   IoIosHeart,
   IoMdPeople,
   IoIosArrowRoundForward,
} from 'react-icons/io'

const landing = {
   hero: {
      image: images.family_moving,
   },
   sections: [
      // ONE
      {
         header: 'Where business innovation meets social transformation.',
         subheader: null,
         text: `ManageLife has pioneered a bold and innovate approach to address inequality by pairing
the interests of working-class members with civically-minded Fortune 500 corporations to
provide opportunities for home ownership, stronger communities, and a better life for all.`,
      },
      // TWO
      {
         columns: [
            {
               icon: IoMdBusiness,
               text: 'Corporate partnership opportunities',
            },
            { icon: IoIosHeart, text: 'Become a member' },
            { icon: IoMdPeople, text: 'Current member resources' },
         ],
      },
      // THREE
      {
         columns: [
            // Left
            { image: images.dad_and_children },
            // Right
            {
               header: `Pioneering greater access to
           home ownership`,
               text: `Our members earn equity and maintain flexibility through a new model of home ownership without mortgages, credit scores, or expensive buying and selling transactions.`,
            },
            // Left
            { image: images.neighborhood },
            // Right
            {
               header: 'Enabling corporate social impact for good',
               text: `We believe corporations can make conscious decisions about where their outsourcing dollars are spent and how that money is utilized for a greater common good.`,
            },
            // Left
            { image: images.women_and_baby },
            // Right
            {
               header:
                  'Sustainable solutions for healthy & resilient communities',
               text: `Families are the building blocks of our communities. By addressing the most common challenges faced by workers and their families, we are able to raise up entire communities.`,
            },
         ],
      },
   ],
}

const members = {
   hero: {
      image: images.family_moving,
   },
   sections: [
      // ONE
      {
         header: 'Empowering Familes',
         subheader: null,
         text: `We believe that families today are facing crucial challenges to meet essential needs such as housing, transportation, financial stability, and access to technology. \n\n ManageLife places a value on humanity by working improve the lives of every member. We do this by providing our members with lifetime support to achieve their goals. We purchase homes and vehicles for working-class Americans and allow them to rent-to-own, receiving equity through our unique program.`,
      },
      //   TWO
      {
         header: 'Challenges faced by today’s families',
         columns: [
            {
               header: 'HOME OWNERSHIP',
               text: `is out of reach for many working Americans`,
            },
            {
               header: 'VEHICLE OWNERSHIP',
               text: `is a necessity some families often go without`,
            },
            {
               header: 'UNFORSEEN EXPENSES',
               text: 'such as medical bills, home or auto repairs',
            },
            {
               header: 'TECHNOLOGY ACCESS',
               text: `inequality impedes education and job access`,
            },
            {
               header: 'DEBT VS EQUITY',
               text: `can make the difference between vulnerability and stability`,
            },
         ],
      },
      {
         header: 'What we work to address',
         text: `To respond to these issues, ManageLife provides service in 4 interconnected areas pertaining to the home and family that, together, enable a better life for our members.`,
         columns: [
            {
               image: images.home,
               header: 'Home',
               text: `We provide home ownership to our members, giving them a safe and stable environment for their families while building equity.`,
            },
            {
               image: images.car_front,
               header: 'Vehicle',
               text: `Our members can pursue vehicle ownership, enabling reliable and safe transportation to work, school, medical care, and activities.`,
            },
            {
               image: images.link,
               header: 'Technology',
               text: `Essential home technologies are included as standard in our homes, ensuring fair access for education, work, and day-to-day needs.`,
            },
            {
               image: images.wrench,
               header: 'Maintenance',
               text: `The burden of unexpected repairs and service is lessened through reduced-cost maintenance and payments that can be spread out over time.`,
            },
         ],
         rows: [
            {
               header: 'Lifetime Financial Benefits',
               text: `Our members enjoy a lifetime of financial benefits through home equity, debt avoidance, reduced-cost products and services, and a predictable and manageable cost of living.`,
            },
         ],
      },
      {
         header: 'How we work',
         text: `We partner with some of the largest corporations and organizations who share our values and vision. Through the mutually beneficial relationship with these partners, our members and their families are empowered to access essential services that enable them to live better lives.`,
         columns: [
            {
               header: 'Foundation',
               text: `100% of donations to our nonprofit foundation go toward home purchases for members.`,
            },
            {
               header: 'Corporate Partnerships',
               text: `98% of all net profits from our corporate awards are directed toward our member programs.`,
            },
            {
               header: 'Group Purchasing',
               text: `Mass product and service purchases through our program demand better pricing as a group`,
            },
         ],
      },
   ],
}

const partners = {
   hero: {
      image: images.family_moving,
   },

   section: [
      // ONE
      {
         header: 'Leading with a Purpose:',
         subheader: `Rethinking the role of for-profit corporations as agents for social impact`,
         text: `We partner with some of the largest corporations and organizations who share our values and vision to build a better tomorrow. Through the mutually beneficial relationship with these partners, our members and their families are empowered to access essential services that enable them to live better lives.`,
      },
      // TWO
      {
         rows: [
            {
               image: images.gear,
               header: 'Corporate Award Partnerships',
               text: `Our corporate award partners channel business awards in pre-defined service areas into the program. 98% of all net profits from these corporate awards partnerships are directed to funding our member programs`,
            },
            {
               image: images.shopping_cart,
               header: 'Product & Service Partnerships',
               text: `The ManageLife program utilizes mass purchases of products and services to fulfill the needs of its membership. Our product and service partners leverage this market for high-volume sales while our members benefit from group pricing rates.`,
            },
            {
               image: images.arrowCircle,
               header: 'Foundation Donations',
               text: `The ManageLife Foundation accepts monetary donations of any size. 100% of these donations go toward home purchases for members.`,
            },
         ],
      },
      // THREE
      {
         header: 'Become a Partner',
         text: `No longer is corporate philanthropy an afterthought or an add-on for today’s leading organizations. These big thinkers are focused on big ideas to incorporate life-changing social impact into their corporate strategies at all levels of business.
          \n\nJoin us in being an agent of good in generating inclusive economic empowerment through creative strategic initiatives. Together, we can lift up our communities today and the future generations of tomorrow.`,
      },
      // FOUR
      {
         header: 'Frequently Asked Questions',
      },
   ],
}

const about = {
   hero: {
      image: images.family_moving,
   },
   sections: [
      // ONE
      {
         header: 'Empowering Familes',
         subheader: null,
         text: `We believe that families today are facing crucial challenges to meet essential needs such as housing, transportation, financial stability, and access to technology. \n\n ManageLife places a value on humanity by working improve the lives of every member. We do this by providing our members with lifetime support to achieve their goals. We purchase homes and vehicles for working-class Americans and allow them to rent-to-own, receiving equity through our unique program.`,
      },
      // TWO
      {
         header: 'Challenges faced by today’s families',
         columns: [
            {
               header: 'HOME OWNERSHIP',
               text: `is out of reach for many working Americans`,
            },
            {
               header: 'VEHICLE OWNERSHIP',
               text: `is a necessity some families often go without`,
            },
            {
               header: 'UNFORSEEN EXPENSES',
               text: 'such as medical bills, home or auto repairs',
            },
            {
               header: 'TECHNOLOGY ACCESS',
               text: `inequality impedes education and job access`,
            },
            {
               header: 'DEBT VS EQUITY',
               text: `can make the difference between vulnerability and stability`,
            },
         ],
      },
      // THREE
      {
         header:
            'ManageLife works to create economic opportunity for our members',
         text: `To respond to these issues, ManageLife provides service in 4 interconnected areas pertaining to the home and family that, together, enable a better life for our members.`,
         columns: [
            {
               image: images.home,
               header: 'Home',
               text: `We provide home ownership to our members, giving them a safe and stable environment for their families while building equity.`,
            },
            {
               image: images.car_front,
               header: 'Vehicle',
               text: `Our members can pursue vehicle ownership, enabling reliable and safe transportation to work, school, medical care, and activities.`,
            },
            {
               image: images.link,
               header: 'Technology',
               text: `Essential home technologies are included as standard in our homes, ensuring fair access for education, work, and day-to-day needs.`,
            },
            {
               image: images.wrench,
               header: 'Maintenance',
               text: `The burden of unexpected repairs and service is lessened through reduced-cost maintenance and payments that can be spread out over time.`,
            },
         ],
         rows: [
            {
               header: 'Lifetime Financial Benefits',
               text: `Our members enjoy a lifetime of financial benefits through home equity, debt avoidance, reduced-cost products and services, and a predictable and manageable cost of living.`,
            },
         ],
      },
   ],
}

export { landing, members, partners, about }
