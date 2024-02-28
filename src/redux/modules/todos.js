//action value
export const REGIST_TODO = 'REGIST_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_STATUS_TODO = 'CHANGE_STATUS_TODO';
export const FIND_BY_ID = 'FIND_BY_ID';

//action creator: action value를 return하는 함수
export const registTodo = (payload) => {
    return {
        type: REGIST_TODO,
        payload,
    }
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
};

export const changeStatusTodo = (payload) => {
    return {
        type: CHANGE_STATUS_TODO,
        payload,
    }
};

export const findById = (payload) => {
    return {
        type: FIND_BY_ID,
        payload,
    }
};

//초기 상태값(state)
const initialState = {
    todos: [],
    todo: {
        id: '0',
        title: "",
        body: "",
        isDone: false,
    },
}

//리듀서: 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수
//input: state와 action을 받는다
const todos = (state = initialState, action) => {
    switch (action.type) {
        case REGIST_TODO:
            const newId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1;
            const newTodo = { ...action.payload, id: newId };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            }
        case CHANGE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            }
        // case FIND_BY_ID:
        //     return {
        //         ...state,
        //         todo: state.todos.find((todo) => {
        //             return todo.id === action.payload
        //         }),
        //     }
        case FIND_BY_ID:
            // console.log('Current todos:', state.todos);
            const foundTodo = state.todos.find((todo) => todo.id == action.payload);
            // console.log('Found todo:', foundTodo);
            return {
                ...state,
                todo: foundTodo ? { ...foundTodo } : state.todo,
            }
        default:
            return state;
    }
}
export default todos;