import React, { useState } from "react";

import styles from "./TodoItem.module.css";

const TodoItem = props => {
    const [isDone, setIsDone] = useState(false);

    const deleteTodoHandler = () => {
        props.onDelete(props.id);
    };

    const strokeTodoHandler = () => {
        console.log("Stroked");
        setIsDone(!isDone);
    };

    return (
        <li className={`${styles.todo_item} ${isDone && styles.done}`}>
            <div className={styles.todo_item__stroke}>
                <input type="checkbox" onChange={strokeTodoHandler} />
            </div>
            <div className={styles.todo_item__content}>{props.todoText}</div>
            <div className={styles.todo_item__delete}>
                <button onClick={deleteTodoHandler}>X</button>
            </div>
        </li>
    );
};

export default TodoItem;
