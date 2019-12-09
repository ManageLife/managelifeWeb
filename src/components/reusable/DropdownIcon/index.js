import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { IoMdMore } from 'react-icons/io'

const ITEM_HEIGHT = 48

const DropdownIcon = ({ options }) => {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div>
         <IconButton
            aria-label='more'
            aria-haspopup='true'
            onClick={handleClick}
         >
            <IoMdMore />
         </IconButton>
         <Menu
            id='long-menu'
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
               style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
               },
            }}
         >
            {options.map(option => (
               <MenuItem key={option.value} onClick={option.onClick}>
                  {option.value}
               </MenuItem>
            ))}
         </Menu>
      </div>
   )
}

export { DropdownIcon }
