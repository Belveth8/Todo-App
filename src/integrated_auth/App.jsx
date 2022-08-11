import { Token } from "@mui/icons-material";
import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api-config";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import Todo from "./Todo";
import {useNavigate} from 'react-router-dom';



function App() {

  const navi = useNavigate();
  
  // Todo 목록리스트
  const [ items, setItems ] = useState([]);

  // Todo 목록 가져오기 (GET)
  useEffect( () => {
    axios.get(API_BASE_URL+ "/todo",
                            {
                              headers: {
                              Authorization : "Bearer "+ localStorage.getItem("ACCESS_TOKEN")
                                             }
                            }
    )
    .then(res => {
      setItems(res.data.resList);
    })
    .catch((error) => {
      navi("/signin");
    })
  },[]);

  // 상태를 끌어올린다 ( 하위 컴포넌트의 변경된 상태를 받기 위해 )
  // TodoList 생성
  const addItem = item => { 
      axios.post(
        API_BASE_URL+ "/todo", 
        item,
        {
          headers: {
          Authorization : "Bearer "+ localStorage.getItem("ACCESS_TOKEN")
                         }
        }
        )
      .then(res => {
        setItems(res.data.resList)
        console.log("addItem: ",res);
      })
    }
  
  // TodoList 수정
  const editItem = item =>{
    axios({
      method:'put',
      url:API_BASE_URL + '/todo',
      data:item,
      headers: {Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")}
    }).then((response)=>{
      setItems(response.data.resList);
    });
  }

  // 이슈 ->
  // 서버쪽 controller 수정 메소드에서 list 반환할 때, 임시 유저아이디 설정을
  // 안 바꿔놓음


  // TodoList 삭제
  const removeItem = item => {
    axios.delete(
      API_BASE_URL+"/todo",
    {
      headers: { Authorization : "Bearer "+ localStorage.getItem("ACCESS_TOKEN") },
      data : item
    }
  )
    .then(res => {
        setItems(res.data.resList);
    })
  }


  return (

    <div className="App">
      <NavBar />
      <Container maxWidth="md">
      <AddTodo addItem = { addItem } />
      <Paper style={{margin:16}}>
        <List>
          {
            items.map((el,idx)=> {
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
