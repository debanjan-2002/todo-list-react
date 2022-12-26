import React from "react";
import styles from "./TodoList.module.css";

import TodoItem from "./TodoItem";

const TodoList = props => {
    return (
        <ul className={styles.todo_list__container}>
            {props.todos.map(todo => (
                <TodoItem key={todo.id} todoText={todo.text} />
            ))}
        </ul>
    );
};

export default TodoList;
