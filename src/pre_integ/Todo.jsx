import { DeleteOutlined } from '@mui/icons-material'
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import React, { useState } from 'react'


function Todo(props) {

  const [ item, setItem ] = useState(props.item);

  const [ readOnly, setReadOnly ] = useState(true);
  

  const editItem = props.editItem;
  const removeItem = props.removeItem; 

  const offReadOnlyMode = () => {
    console.log("Event!", readOnly);
    setReadOnly(false)
    }

    // readonly 모드를 끄고 아이템을 수정한 다음 엔터키를 눌렀을 때,
    const enterKeyEventHandler = (e) => {
      if (e.key === 'Enter') {
        setReadOnly(true);
        console.log("Event !! ", readOnly)
      }
    }

  // Todo 수정
  const editEventHandler = e => {
   let update = { ...item, title:e.target.value  }
    setItem(update);
    editItem();
  }
  // Todo 삭제
  const removeEventHandler = () => {
    removeItem(item);
    console.log("Todo List Delete")
  }
  // 체크박스
  const checkBoxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
    console.log(item.done)
  }


  return (

    <ListItem>
      <Checkbox checked={item.done} 
          onChange={ checkBoxEventHandler }
      />
      <ListItemText>
        <InputBase
            inputProps={{ readOnly:readOnly }}
            type='text'
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
            onClick = { offReadOnlyMode }
            onChange = { editEventHandler }
            onKeyDown = { enterKeyEventHandler }
            spellCheck= { false }
         />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <DeleteOutlined 
            onClick = { removeEventHandler }
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

  )
}

export default Todo