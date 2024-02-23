import React, { useState } from "react";
import './App.css';
import { MdFileDownloadDone } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import Done from './components/Done';
import NotDone from './components/NotDone';


const App = () => {

  const [todos, setTodos] = useState([
    // { id: 1, title: '', body: '', isDone: false },
    // { id: 2, title: '1', body: '22', isDone: false },
    // { id: 3, title: '2', body: '33', isDone: true },
    // { id: 4, title: '3', body: '44', isDone: false },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDone, setIsDone] = useState(false);

  const addButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone,
    }
    setTodos([...todos, newTodo])
    setTitle("");
    setBody("");
  };

  const deleteButtonHandler = (id) => {
    const newTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const changeStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const notDoneTodos = todos.filter(function (todo) {
    return todo.isDone === false;
  });

  const doneTodos = todos.filter(function (todo) {
    return todo.isDone === true;
  });




  return (
    <div className="container">
      <div className="input-bar">
        <div className="input-group">
          <label>제목</label>
          <input value={title} onChange={(event) => {
            setTitle(event.target.value)
          }} />
          <label>내용</label>
          <input value={body} onChange={(event) => {
            setBody(event.target.value)
          }} />
        </div>
        <button className="add-btn" onClick={addButtonHandler}>추가하기</button>
      </div>
      <span className="section-title">Working<BsFire /></span>
      <div className="not-done">
        {notDoneTodos.map(function (item) {
          return <NotDone key={item.id} item={item} deleteButtonHandler={deleteButtonHandler} changeStatus={changeStatus} />
        })}
      </div>

      <span className="section-title">Done!!<MdFileDownloadDone /></span>
      <div className="done">
        {doneTodos.map(function (item) {
          return <Done key={item.id} item={item} deleteButtonHandler={deleteButtonHandler} changeStatus={changeStatus} />
        })}
      </div>

    </div>
  )


}








export default App;
