import classNames from "classnames";
import React, { useContext } from "react";
import { TodoContext } from "../../context/context";
import { AiTwotoneDelete } from "react-icons/ai";
import Button from "../Button/Button";

import style from "./todoItem.module.css";

const TodoItem = ({
    todoName,
    todoId,
    complete,
}) => {

    const todo = useContext(TodoContext);

    const completeTask = complete && style.complete;

    const classTodoName = classNames(style.todoName, completeTask);

    return (
        <div className={style.container}>
            <div className={style.todoNameContainer}>
                <span className={classTodoName} onClick={() => todo.doneTask(todoId)}>
                    {todoName}
                </span>
            </div>
            <div className={style.buttonContainer}>
                <Button onClick={() => todo.removeTodo(todoId)}>
                    <AiTwotoneDelete />
                </Button>
            </div>
        </div> 
    );
}

export default TodoItem;
