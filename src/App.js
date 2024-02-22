import React, { useState } from "react";
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: '', body: '', isDone: false },
    { id: 2, title: '1', body: '22', isDone: false },
    { id: 3, title: '2', body: '33', isDone: true },
    { id: 4, title: '3', body: '44', isDone: false },
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

  const notDoneTodos = todos.filter(function (todo) {
    return todo.isDone === false;
  });

  const doneTodos = todos.filter(function (todo) {
    return todo.isDone === true;
  });


  return (
    <div>

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
      <button onClick={addButtonHandler}>추가하기</button>

      <span>해야할 것</span>
      <div className="not-done">
        {notDoneTodos.map(function (item) {
          return <NotDone key={item.id} item={item} />
        })}
      </div>

      <span>완료한 것</span>
      <div className="done">
        {doneTodos.map(function (item) {
          return <Done key={item.id} item={item} />
        })}
      </div>

    </div>
  )


}


const NotDone = ({ item }) => {
  return (
    <div key={item.id} className="component-style">
      {item.title}<br/>
      {item.body}
      <button>삭제하기</button>
      <button>완료</button>
    </div>
  )
}

const Done = ({ item }) => {
  return (
    <div key={item.id} className="component-style">
      {item.title}<br/>
      {item.body}
      <button>삭제하기</button>
      <button>취소</button>
    </div>
  )
}



export default App;
