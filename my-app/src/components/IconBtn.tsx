import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Button from '@mui/material/Button';


function IconBtn() {

  return (
    <div>
        <Button  className=' m-2 my-5' startIcon={<AddIcCallIcon />} variant="contained" color="primary">Icon call Button</Button>
    </div>
  )
}

export default IconBtn