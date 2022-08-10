import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Copyright from './Copyright'
import SignIn from './SignIn'
import SignUp from './SignUp'

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
      <Copyright />
      </Box>
    </div>
  )
}

export default AppRouter