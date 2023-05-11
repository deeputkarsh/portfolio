import React from 'react'
import Link from './Link'
import { Dehaze as DehazeIcon } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import { baseUrl } from '@self/config'

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  

  return (
    <header className='header-wrapper'>
      <div className='logo-container' />
      <div className='menu-container'>
        <DehazeIcon onClick={handleClick} />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link className='link' href={`${baseUrl}`}>Home</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link className='link' href={`${baseUrl}about`}>About</Link></MenuItem>
        </Menu>
      </div>
    </header>
  )
}