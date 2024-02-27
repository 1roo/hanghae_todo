import React from 'react'
import { Link, useParams } from 'react-router-dom'




function About ({todos}) {

    const params = useParams();
    
    console.log(params.id);
    console.log(todos);


    const todo = todos.find((todo) => {
        return todo.id === parseInt(params.id)
    })

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

export default About;