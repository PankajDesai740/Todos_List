import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { TodosList } from './Components/TodosList';
import { AddTodo } from './Components/AddTodo';
import { useState } from 'react';



function App() {
  const onDelete = (todo) => {
    console.log("Delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;

    }));
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
    console.log("Add todo", title, desc)
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: " DSA Time",
      desc: "Learn C++ and solve Problems in it "
    },
    {
      sno: 2,
      title: " Development Time",
      desc: " Create React app "
    },
    {
      sno: 3,
      title: " College Time",
      desc: "Write Assigments of Ml"
    }

  ]);
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
