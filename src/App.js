import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { TodosList } from './Components/TodosList';
import { Todo } from './Components/Todo';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;

    }));
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
      <TodosList todos={todos} onDelete={onDelete} />

      <Footer />


    </>
  );
}

export default App;
