import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { registTodo } from '../redux/modules/todos';

const RegistTodo = () => {

    const dispatch = useDispatch();
    const [id, setId] = useState(1);
    const [todo, setTodo] = useState({
        title: '',
        body: '',
        isDone: false,
    })


    const registHandler = () => {
        if (todo.title.trim() === "" || todo.body.trim() === "") return;
    
        // 새로운 todo의 id 설정
        const newId = id + 1;
    
        dispatch(registTodo({ ...todo, id: newId }));
        setId(newId);
        setTodo({
            title: "",
            body: "",
            isDone: false,
        });
    }






    return (
        <div>
            <div className="input-bar">
                <div className="inputs">
                    제목
                    <input type="text"
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                    내용
                    <input type="text"
                        value={todo.body}
                        onChange={(e) => setTodo({ ...todo, body: e.target.value })} />
                </div>
                <button className="regist-btn" onClick={registHandler}>추가하기</button>
            </div>
        </div>
    )
}

export default RegistTodo