import React, { useState } from "react";
import TodoRegist from '../components/TodoRegist'
import TodoStatus from "../components/TodoStatus";


const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: '1리액트 공부하기', body: '1리액트 기초를 공부합시다', isDone: false },
        { id: 2, title: '2리액트 공부하기', body: '2리액트 기초를 공부합시다', isDone: false },
        { id: 3, title: '3리액트 공부하기', body: '3리액트 기초를 공부합시다', isDone: false },
        { id: 4, title: '4리액트 공부하기', body: '4리액트 기초를 공부합시다', isDone: false },
    ])




    //todo 등록
    const registTodoHandler = ({ title, body }) => {

        const newTodo = {
            id: todos.length + 1,
            title,
            body,
            isDone: false,
        }
        setTodos([...todos, newTodo])
    }


    //todo 삭제
    const deleteTodoHandler = (id) => {
        const deleteTodo = todos.filter((todo) => todo.id !== id)
        setTodos(deleteTodo);
    }

    //todo 완료
    const isTodoDoneHandler = (id) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                }
            }
            return todo;
        })
        setTodos(updateTodos);
    }

    return (
        <>
            <TodoRegist registTodoHandler={registTodoHandler} />
            <TodoStatus todos={todos} deleteTodoHandler={deleteTodoHandler} isTodoDoneHandler={isTodoDoneHandler} />
        </>
    )



}

export default TodoList;