import React from 'react'
import { Todo } from './Todo'

export const TodosList = (props) => {
  let myStyle ={
      minHeight:"70vh",
      margin:"40px auto"
  }


  return (

    <div className="container" style = {myStyle}>
      <h3 className='my-3'>Todo's List</h3>
      {props.todos.length === 0 ? "No Todos To Display" :
        props.todos.map(todo => {
          return (
            <>
          <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
          </>
          )
        })}

    </div>
  )
}
