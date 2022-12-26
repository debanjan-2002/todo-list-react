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
                { text: enteredData, id: new Date().getTime().toString() }
            ];
        });
        console.log(todoArray);
    };
    return (
        <div className={styles.container}>
            <Header />
            <NewTodo onAddTodo={addTodoHandler} />
            <TodoList todos={todoArray} />
        </div>
    );
};

export default App;
