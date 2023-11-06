import { IconButton } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function CreateGroups() {
  return (
    <div className='createGroups-container'>
      <input placeholder='Create a group' className='search-box' />
      <IconButton>
        <CheckCircleOutlineIcon />
      </IconButton>

    </div>
  )
}

export default CreateGroups