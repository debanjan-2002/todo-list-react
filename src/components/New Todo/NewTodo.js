import React, { useState } from "react";

import styles from "./NewTodo.module.css";

const NewTodo = props => {
    const [todoText, setTodoText] = useState("");
    const [flag, setFlag] = useState(true);

    const newTodoHandler = e => {
        e.preventDefault();
        if (todoText.trim().length > 0) {
            props.onAddTodo(todoText);
            setTodoText("");
        } else {
            setFlag(false);
        }
    };
    const textChangeHandler = e => {
        if (e.target.value.trim().length > 0) {
            setFlag(true);
        }
        setTodoText(e.target.value);
    };

    return (
        <form
            className={`${styles.new_todo__container} ${
                !flag && styles.invalid
            }`}
            onSubmit={newTodoHandler}
        >
            <textarea
                id="todo_text"
                type="text"
                value={todoText}
                onChange={textChangeHandler}
                placeholder="Add Todo..."
                rows="5"
            ></textarea>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
