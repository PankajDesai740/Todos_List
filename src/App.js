import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { TodosList } from './Components/TodosList';
import { AddTodo } from './Components/AddTodo';
import { useState, useEffect } from 'react';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // add todo
  const addTodo = (title, desc) => {
   
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="ToDo'S" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <TodosList todos={todos} onDelete={onDelete} />

      <Footer />


    </>
  );
}

export default App;
