import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";



function App() {

  // Todo 목록리스트
  const [ items, setItems ] = useState([]);

  const REACT_APP_SPRING_BOOT = "http://192.168.0.185:8080"

  // Todo 목록 가져오기 (GET)
  useEffect( () => {
    axios.get(REACT_APP_SPRING_BOOT+ "/todo")
    .then(res => {
      setItems(res.data.resList);
    })
  },[]);

  // 상태를 끌어올린다 ( 하위 컴포넌트의 변경된 상태를 받기 위해 )
  // TodoList 생성
  const addItem = item => { 
      axios.post(REACT_APP_SPRING_BOOT+ "/todo", item)
      .then(res => {
        setItems(res.data.resList)
        console.log("addItem: ",res);
      })
    }
  
  // TodoList 수정
  const editItem = item =>{
    axios.put(REACT_APP_SPRING_BOOT+"/todo", item)
    .then(res=> {
      setItems(res.data.resList);
    })
  }

  // TodoList 삭제
  const removeItem = item => {
    axios.delete(REACT_APP_SPRING_BOOT+"/todo", {data:item})
    .then(res => {
        setItems(res.data.resList);
    })
  }


  return (

    <div className="App">
      <Container maxWidth="md">
      <AddTodo addItem = { addItem } />
      <Paper style={{margin:16}}>
        <List>
          {
            items.map((el)=> {
              return <Todo key={el.id}
                                    item={el} 
                                     editItem = { editItem }
                                     removeItem = { removeItem } />
            })
          }
        </List>
      </Paper>
      </Container>
    </div>

  );
}

export default App;
