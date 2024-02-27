import React, { useState } from "react";


const TodoRegist = ({ registTodoHandler }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const registTodo = () => {
        registTodoHandler({ title, body });
        setTitle('');
        setBody('');
    }


    return (
        <div>
            <div className="input-bar">
                <div className="inputs">
                    제목
                    <input type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} />
                        내용
                    <input type="text"
                        value={body}
                        onChange={(event) => setBody(event.target.value)} />
                </div>
                <button className="regist-btn" onClick={registTodo}>추가하기</button>
            </div>
        </div>
    )

}





export default TodoRegist;