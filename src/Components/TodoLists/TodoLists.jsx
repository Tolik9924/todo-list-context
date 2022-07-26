import React, { useContext } from "react";
import { TodoContext } from "../../context/context";
import classNames from "classnames";

import style from "./todoLists.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoLists = () => {

    const todo = useContext(TodoContext);

    const containerPadding = todo.todos.length !== 0 && style.containerPadding;

    const classListsContainer = classNames(style.container, containerPadding);

    return (
        <div className={classListsContainer}>
            {todo.todos.map((item) => {
                return (
                    <TodoItem key={item.id}
                        todoName={item.todoName}
                        todoId={item.id}
                        complete={item.complete} />
                );
            })}
        </div>
    );
}

export default TodoLists;
