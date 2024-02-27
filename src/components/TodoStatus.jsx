import React from "react";

const TodoStatus = ({ todos, deleteTodoHandler, isTodoDoneHandler }) => {
    console.log('todos: ', todos);

    if (!Array.isArray(todos)) {
        return null; // todos가 배열이 아닐 때는 아무것도 렌더링하지 않음
    }


    return (
        <div>
            <hr/>
            <h1>Working.. 🔥</h1>
            <div className="todo-list">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <div className="todo-container" key={todo.id}>
                                <div>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.body}</p>
                                </div>
                                <div className="btns">
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTodoHandler(todo.id)}>삭제하기</button>
                                    <button
                                        className="done-btn"
                                        onClick={() => isTodoDoneHandler(todo.id)}>
                                        완료하기
                                        </button>    
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <hr/>
            <h1>Done..! 🎉</h1>
            <div>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <div className="todo-container" key={todo.id}>
                                <div>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.body}</p>
                                </div>
                                <div className="btns">
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTodoHandler(todo.id)}>삭제하기</button>
                                    <button
                                        className="not-done-btn"
                                        onClick={() => isTodoDoneHandler(todo.id)}>
                                        취소하기
                                        </button>    
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )

}


export default TodoStatus;