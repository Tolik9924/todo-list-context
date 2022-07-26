import React, { useState, useReducer } from "react";

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import style from './todo.module.css';
import { TodoContext } from "../../context/context";
import TodoLists from "../TodoLists/TodoLists";

const initialState = {
    todos: [],
    newId: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTodo': {
            return { ...state, todos: [...state.todos, action.newTodo] };
        }
        case 'increaseNewId': {
            return { ...state, newId: state.newId + 1 };
        }
        case 'doneTask': {
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo.id === action.id ? { ...todo, complete: !todo.complete } : { ...todo }
                )
            };
        }
        case 'removeTodo': {
            return {
                ...state, todos: state.todos.filter((todo) => todo.id !== action.id)
            };
        }
        default: return state;
    }
}

const Todo = () => {

    const [nameTodo, setNameTodo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = () => {
        const newTodo = {
            todoName: nameTodo,
            complete: false,
            id: state.newId
        };

        dispatch({ type: 'addTodo', newTodo });
        dispatch({ type: 'increaseNewId' });
        setNameTodo('');
    }

    const doneTask = (id) => {
        dispatch({ type: 'doneTask', id });
    }

    const removeTodo = (id) => {
        dispatch({ type: 'removeTodo', id });
    }

    const handleChange = (event) => {
        setNameTodo(event.target.value);
    }

    console.log(state.todos);

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            todoName: state.todos.todoName,
            complete: state.todos.complete,
            todoId: state.newId,
            doneTask: doneTask,
            removeTodo: removeTodo
        }}>
            <div className={style.container}>
                <Header>Todo List</Header>
                <div className={style.formTodo}>
                    <div className={style.inputContainer}>
                        <Input value={nameTodo} onChange={handleChange} />
                    </div>
                    <div className={style.buttonContainer}>
                        <Button onClick={addTodo}>Add</Button>
                    </div>
                </div>
                <TodoLists />
            </div>
        </TodoContext.Provider>
    );
}

export default Todo;
