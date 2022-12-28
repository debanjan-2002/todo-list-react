import React, { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import NewTodo from "./components/New Todo/NewTodo";

const App = () => {
    const [todoArray, setTodoArray] = useState([]);

    const addTodoHandler = enteredData => {
        setTodoArray(prevState => {
            return [
                ...prevState,
                { text: enteredData, id: Math.random().toString() }
            ];
        });
    };

    const deleteHandler = todoId => {
        const filteredTodos = todoArray.filter(todo => todo.id !== todoId);
        setTodoArray(filteredTodos);
    };
    return (
        <div className={styles.container}>
            <Header />
            <NewTodo onAddTodo={addTodoHandler} />
            <TodoList todos={todoArray} onDeleteTodo={deleteHandler} />
        </div>
    );
};

export default App;
