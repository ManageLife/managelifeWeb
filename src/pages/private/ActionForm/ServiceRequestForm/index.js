import React from 'react'
import { IoIosArrowBack as BackIcon } from 'react-icons/io'
import { COLORS } from 'config/styles'

function ServiceRequestForm() {
   return (
      <form>
         <h3>
            <BackIcon
               onClick={() => window.history.back()}
               style={styles.backIcon}
            />
            ServiceRequestForm
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
export { ServiceRequestForm }
