import React, { useState } from "react";
import "./App.css";
import IsDoneTitle from "./component/IsDoneTitle";
import TodoListItem from "./component/TodoListItem";
import TodoTitle from "./component/TodoTitle";
import IsDoneItem from "./component/IsDoneItem";
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from "./component/Input";

//Components are called from App js based on hearing and position on the page
function App() {
  const [todoItem, setTodoItem] = useState({ text: "", isDone: false });
  const [todoList, setTodoList] = useState([]);

  function setTodoText(event) {
    setTodoItem({ text: event.target.value, isDone: false });
  }
  function addTodo() {
    todoList.push(todoItem);
    setTodoList(todoList);
    setTodoItem({ text: "", isDone: false });
  }

  function finishTodo(todo) {
    todo.isDone = true;
    setTodoList([...todoList]);
  }

  function sendBack(todo) {
    todo.isDone = false;
    setTodoList([...todoList]);
  }
  return (
    <>
      <div className="input">
        <Input></Input>
      </div>
      <div className="App d-flex justify-content-center">
        <div className="todo me-3 ">
          <TodoTitle></TodoTitle>
          <TodoListItem></TodoListItem>
        </div>
        <div className="isdone">
          <IsDoneTitle></IsDoneTitle>
          <IsDoneItem></IsDoneItem>
        </div>
      </div>
    </>
  );
}

export default App;
