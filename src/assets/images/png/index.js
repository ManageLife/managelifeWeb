import ml_logo_white from './ml_logo_white.png'
import ml_logo_blue from './ml_logo_blue.png'
import dad_and_children_png from './dad_children__istock.png'
import family_moving_png from './family_moving__istock.png'
import neighborhood_png from './neighborhood__istock.png'
import women_and_baby_png from './women_baby__istock.png'
import manage_life_logo_114x114 from './manage_life_logo_114x114.png'

const attrs = {
   iStock: 'istockphoto.com',
}

const pngs = {
   ml_logo_white: {
      source: ml_logo_white,
      altText: 'ManageLife logo',
      attribution: '',
   },
   ml_logo_blue: {
      source: ml_logo_blue,
      altText: 'ManageLife logo',
      attribution: '',
   },
   manage_life_logo: {
      source: manage_life_logo_114x114,
      altText:
         'Manage Life Company Logo. An Outline of a house with a heart in it.',
      attribution: '',
   },
   dad_and_children: {
      source: dad_and_children_png,
      altText: 'A father with two sons on his shoulders on a couch',
      attribution: attrs.iStock,
   },
   family_moving: {
      source: family_moving_png,
      altText: 'A Mother, father, boy, and girl playing with moving boxes',
      attribution: attrs.iStock,
   },
   neighborhood: {
      source: neighborhood_png,
      altText: `Bird's-eye view of a suburb neighborhood`,
      attribution: attrs.iStock,
   },
   women_and_baby: {
      source: women_and_baby_png,
      altText: 'Two woman swoon over a baby at a social gathering',
      attribution: attrs.iStock,
   },
}
export { pngs }
