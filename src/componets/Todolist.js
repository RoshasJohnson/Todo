import React from 'react'
import Todo from './Todo'

function Todolist({todos,setTodos}) {
    console.log(...todos);
  return (
    <div className="todo-container">
         <ul className="todo-list">
        {
            todos.map((todo)=>(
                <Todo key={todo.id} text ={todo.text} setTodos ={setTodos} todo ={todo} todos = {todos} />
            ))
        }
         </ul>
    </div>
   

  )
}

export default Todolist