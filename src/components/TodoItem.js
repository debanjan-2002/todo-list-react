import React from "react";

import styles from "./TodoItem.module.css";

const TodoItem = props => {
    return <li className={styles.todo_item}>{props.todoText}</li>;
};

export default TodoItem;
