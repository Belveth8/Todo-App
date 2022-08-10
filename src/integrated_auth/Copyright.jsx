import { Typography } from '@mui/material'
import React from 'react'

// footer
function Copyright() {

  return (

    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <i className="fa-brands fa-github" style={{ fontSize:'1.7rem' }}></i>
      &nbsp; Bitcamp BIT221기 &nbsp;
      {new Date().getFullYear()}
    </Typography>

  )
}

export default Copyright