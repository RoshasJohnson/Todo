import "./App.css";
import React,{useState} from "react";

// Imporitng compontes
import Form from "./componets/Form";
import Todolist from "./componets/Todolist";
import Todo from "./componets/Todo";


function App() {
const [inputText, setInputText] = useState("")
const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>
          To Do 
        </h1>
      </header>
      <Form inputText = {inputText} todos = {todos} setTodos  = {setTodos} setInputText = {setInputText}/>
      <Todolist todos = {todos} setTodos ={setTodos}/>


    </div>
  );
}

export default App;
