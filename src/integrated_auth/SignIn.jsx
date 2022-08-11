import { Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../api-config'

function SignIn() {

  const navi = useNavigate();

  const gotoSignUp = () => {
    navi("/signup");
  }

  function signin(userDTO) {
    axios({
      method: 'post',
      url:API_BASE_URL+"/auth/signin",
      data:userDTO
    })
      .then((response)=> {
        // console.log(response.data);
        // localstorage에 받아온 데이터 저장
        if (response.data.token) {
          localStorage.setItem("ACCESS_TOKEN", response.data.token);
          // 토큰이 존재하는 경우 TODO 화면으로 리디렉트
          navi("/");
        }
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signin({username:username, password:password});
  }

  return (

    <Container component='main'
                        maxWidth='xs'
                        style={{marginTop:'8%'}}>
      <Grid container spacing={2} style={{marginBottom:'20px'}} >
        <Grid item xs={12}>
          <Typography component='h1' variant='h5'>
            <span>Login</span>
            <i className="fa-solid fa-key"style={{marginLeft:'10px', color:'#ccc'}}></i>
          </Typography>
        </Grid>
      </Grid>

    <form onSubmit={ handleSubmit }>
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
              onClick={console.log("signin btn evnt!")}
            >
            sigiin
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
              type='submit' 
              fullWidth 
              variant='contained'
              color='primary'
              onClick={gotoSignUp}
            >
            signup
          </Button>
        </Grid>
    </Grid>
    </form>
    </Container>
    
  )
}

export default SignIn