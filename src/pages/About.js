import React, { useEffect } from 'react'
import { findById } from '../redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const About = () => {


    const todo = useSelector((state) => state.todos.todo);
    console.log('todo: ', todo);
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log('id: ', id);


    useEffect(() => {
        // console.log('FIND_BY_ID 액션 디스패치됨');
        // console.log('Action payload:', id);
        const action = findById(id);
        // console.log('FIND_BY_ID 액션 페이로드:', action.payload);
        dispatch(action);
    }, [dispatch, id]);


    return (
        <div className='detail-box'>
            <div className='detail-top'>
                <p className='id'>ID: {todo.id}</p>
                <div className='link'>
                    <Link to='/'>이전으로</Link>
                </div>
            </div>
            <div>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
            </div>
        </div>
    )
}

export default About