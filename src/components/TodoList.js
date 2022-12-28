import React from "react";
import styles from "./TodoList.module.css";

import TodoItem from "./TodoItem";

const TodoList = props => {
    const deleteTodoItemHandler = todoId => {
        props.onDeleteTodo(todoId);
    };
    return (
        <ul className={styles.todo_list__container}>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todoText={todo.text}
                    id={todo.id}
                    onDelete={deleteTodoItemHandler}
                />
            ))}
        </ul>
    );
};

export default TodoList;
