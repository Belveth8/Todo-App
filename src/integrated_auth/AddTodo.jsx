import { Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddTodo(props) {
  // 사용자의 입력을 저장할 obj
  const [ item, setItem ] = useState({ title:'' });

  const addItem = props.addItem;

  const onButtonClick = () => {
    addItem(item)
    setItem({ title:'' })  // 입력란 초기화
  }


  const onInputChange = (e) => {
    setItem({title:e.target.value});
  }

  const enterKeyEventHandler = (e) => {
    // enter 키 구분
    if (e.key === 'Enter') {
      onButtonClick();
    }
  }

  return (

    <Paper style={{ margin:16, padding:30 }}>
      <Grid container>
        <Grid item xs={11} md={11} sm={11}>
          <TextField 
              placeholder='Add Todo Here'
              fullWidth
              value={ item.title }
              onChange={ onInputChange }
              onKeyPress={ enterKeyEventHandler }
          />
        </Grid>

        <Grid item xs={1} md={1} sm={1}>
          <Button color='secondary' variant='text'
            style={{ height:'100%' }}
            onClick={ onButtonClick }
            >
            <i className="fa-solid fa-calendar-plus" style={{ fontSize:'2rem' }}></i>
          </Button>
        </Grid>
      </Grid>
    </Paper>

  )
}

export default AddTodo