import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import TodoList from "../pages/TodoList";
import About from "../pages/About";


const Router = () => {
    
    const [todos, setTodos] = useState([
        { id: 1, title: '1리액트 공부하기', body: '1리액트 기초를 공부합시다', isDone: false },
        { id: 2, title: '2리액트 공부하기', body: '2리액트 기초를 공부합시다', isDone: false },
        { id: 3, title: '3리액트 공부하기', body: '3리액트 기초를 공부합시다', isDone: false },
        { id: 4, title: '4리액트 공부하기', body: '4리액트 기초를 공부합시다', isDone: false },
    ])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList  todos={todos} setTodos={setTodos}/>} />
                <Route path="about/:id" element={<About todos={todos} />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;