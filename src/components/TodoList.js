import React from "react";
import styles from "./TodoList.module.css";

import TodoItem from "./TodoItem";

const TodoList = props => {
    const deleteTodoItemHandler = todoId => {
        props.onDeleteTodo(todoId);
    };

    const strokeTodoItemHandler = (todoId, isDone) => {
        props.onStrokeTodo(todoId, isDone);
    };

    return (
        <ul className={styles.todo_list__container}>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todoText={todo.text}
                    id={todo.id}
                    isCompleted={todo.isCompleted}
                    onDelete={deleteTodoItemHandler}
                    onStroke={strokeTodoItemHandler}
                />
            ))}
        </ul>
    );
};

export default TodoList;
