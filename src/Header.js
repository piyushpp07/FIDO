import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@material-ui/core';

function Header() {
   return (
      <div className='header'>
         <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
         </IconButton>
         <h2>FIDO</h2>
         <IconButton>
            <ChatBubbleIcon fontSize="large" className="header__icon" />
         </IconButton>

      </div>
   )
}

export default Header