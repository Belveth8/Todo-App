import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../api-config';

function SignUp() {

  let navi = useNavigate();

  function signupEvent (userDTO) {
    axios.post(API_BASE_URL+"/auth/signup", userDTO)
    .then(res => {
      navi("/signin");
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signupEvent({username:username, password:password});
  }

  return (

    <Container component='main'
      maxWidth='xs'
      style={{ marginTop: '8%' }}>
      <Grid container spacing={2} style={{ marginBottom: '20px' }} >
        <Grid item xs={12}>
          <Typography component='h1' variant='h5'>
            <span>Sign Up</span>
            <i className="fa-solid fa-user-pen" style={{ marginLeft: '10px', color: '#ccc' }}></i>
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='username'
              name='username'
              label="Email"
              autoComplete='username'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='password'
              variant='outlined'
              required
              fullWidth
              id='password'
              name='password'
              label="Password"
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={signupEvent}
            >
              Create Account
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign:'center', justifyContent:'center' }}>
          <i className="fa-solid fa-bell" style={{color:'crimson', marginRight:'5px'}}></i>
          <Link to="/signin" variant="body2" style={{ textDecoration:'none', color:'steelblue', marginLeft:6 }}>
          <span>Already have an account? Please Log in here</span>
          </Link>
          </Grid>
        </Grid>
      </form>
    </Container>

  )
}

export default SignUp