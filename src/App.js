import logo from './logo.svg';
import './App.css';

import Header from "./MyComponents/header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useEffect, useState } from 'react';
import { AddTodoForm } from "./MyComponents/AddTodoForm";
import { About } from "./MyComponents/About";
import { Routes, Route } from "react-router";
import {
  HashRouter as Router
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));


  }
  const onDelete = (todo) => {
    console.log("i am delete ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
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
    setTodos([...todos, myTodo])
    console.log(myTodo);


  }



  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])


  return (
    <>
      <Router>
        <Header title="MytodoList" searchBar={false} />

        <Routes>
          <Route exact path="/" element={
              <>
                
                <AddTodoForm addTodo={addTodo} />
                
                
                <Todos todos={todos} onDelete={onDelete} />
              
              </>
            
           }/>
          
          <Route path="/about" element={<About />}/>
            
          

        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
