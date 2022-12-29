import React from "react";

import styles from "./TodoItem.module.css";

const TodoItem = props => {
    const deleteTodoHandler = () => {
        props.onDelete(props.id);
    };

    const strokeTodoHandler = () => {
        props.onStroke(props.id, !props.isCompleted);
    };

    return (
        <li
            className={`${styles.todo_item} ${
                props.isCompleted && styles.done
            }`}
        >
            <div className={styles.todo_item__stroke}>
                <input
                    type="checkbox"
                    checked={props.isCompleted}
                    onChange={strokeTodoHandler}
                />
            </div>
            <div className={styles.todo_item__content}>{props.todoText}</div>
            <div className={styles.todo_item__delete}>
                <button onClick={deleteTodoHandler}>X</button>
            </div>
        </li>
    );
};

export default TodoItem;
