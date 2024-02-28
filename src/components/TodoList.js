import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, changeStatusTodo } from '../redux/modules/todos';

function TodoList() {

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const isTodoDoneHandler = (id) => {
        dispatch(changeStatusTodo(id));
    }



    return (
        <div>
            <hr />
            <h1>Working.. 🔥</h1>
            <div className="todo-list">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <div className="todo-container" key={todo.id}>
                                <div>
                                    <Link to={`/${todo.id}`} key={todo.id}>{todo.id}상세보기</Link>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.body}</p>
                                </div>
                                <div className="btns">
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTodoHandler(todo.id)}>삭제하기</button>
                                    <button
                                        className="done-btn"
                                        onClick={() => isTodoDoneHandler(todo.id)}>완료하기</button>
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <hr />
            <h1>Done..! 🎉</h1>
            <div>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <div className="todo-container" key={todo.id}>
                                <div>
                                    <Link to={`/${todo.id}`} key={todo.id}>상세보기</Link>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.body}</p>
                                </div>
                                <div className="btns">
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTodoHandler(todo.id)}>삭제하기</button>
                                    <button
                                        className="not-done-btn"
                                        onClick={() => isTodoDoneHandler(todo.id)}>취소하기</button>
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default TodoList