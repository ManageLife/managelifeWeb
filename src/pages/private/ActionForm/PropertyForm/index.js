import React from 'react'
import { IoIosArrowBack as BackIcon } from 'react-icons/io'
import { COLORS } from 'config/styles'

function PropertyForm() {
   return (
      <form>
         <h3>
            <BackIcon
               onClick={() => window.history.back()}
               style={styles.backIcon}
            />
            PropertyForm
         </h3>
      </form>
   )
}

const styles = {
   backIcon: {
      color: COLORS.PRIMARY,
      fontSize: '5vw',
   },
}
export { PropertyForm }
