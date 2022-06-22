import React from 'react'
import { Todo } from './Todo'

export const TodosList = (props) => {
  return (
    <div className="container">
      <h3 className='text-center  my-3'>Todo's List</h3>
      {props.todos.length===0 ?"No Todos To Display":
      props.todos.map(todo =>{
       return  <Todo todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
    
      </div>
  )
}
