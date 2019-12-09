import arrow_circle_svg from './arrow_circle_outline__creativeCommons.svg'
import car_front_svg from './car_front_outline__graphicsBay.svg'
import gear_svg from './gear_outline__justIcon.svg'
import heart_svg from './heart_outline__craftIcons.svg'
import home_svg from './home_outline__webalys.svg'
import link_svg from './link_outline__webalys.svg'
import people_svg from './people_outline__creativeCommons.svg'
import shopping_cart_svg from './shopping_cart_outline__webayls.svg'
import wrench_svg from './wrench_outline__webalys.svg'

const attrs = {
   webalys: 'https://www.iconfinder.com/webalys',
   craftIcons: 'https://www.iconfinder.com/aathis',
   creativeCommons: 'https://creativecommons.org/licenses/by/3.0/legalcode',
   justIcon: 'https://www.iconfinder.com/justicon',
   graphicsBay: 'https://www.flaticon.com/authors/graphicsbay',
}

const svgs = {
   arrowCircle: {
      source: arrow_circle_svg,
      altText: 'Arrows in a circle',
      attribution: attrs.creativeCommons,
   },
   car_front: {
      source: car_front_svg,
      altText: 'Outline of a car, frontal view',
      attribution: attrs.graphicsBay,
   },
   gear: {
      source: gear_svg,
      altText: 'Outline of a mechanical gear',
      attribution: attrs.justIcon,
   },
   heart: {
      source: heart_svg,
      altText: 'Outline of a heart',
      attribution: attrs.craftIcons,
   },
   home: {
      source: home_svg,
      altText: 'Outline of a house',
      attribution: attrs.webalys,
   },
   link: {
      source: link_svg,
      altText: 'Two connected links in a chain',
      attribution: attrs.webalys,
   },
   people: {
      source: people_svg,
      altText: 'Three busts representing a group of people',
      attribution: attrs.creativeCommons,
   },
   shopping_cart: {
      source: shopping_cart_svg,
      altText: 'Outlined shopping cart',
      attribution: attrs.webalys,
   },
   wrench: {
      source: wrench_svg,
      altText: 'Outlined wrench crossed with a screwdriver',
      attribution: attrs.webalys,
   },
}

export { svgs }
