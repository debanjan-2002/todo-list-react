import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import NewTodo from "./components/New Todo/NewTodo";

const getLocalStorageData = () => {
    const todoList = localStorage.getItem("todoList");
    if (!todoList) return [];
    return JSON.parse(todoList);
};

const App = () => {
    const [todoArray, setTodoArray] = useState(getLocalStorageData());

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoArray));
    }, [todoArray]);

    const addTodoHandler = enteredData => {
        setTodoArray(prevState => {
            return [
                ...prevState,
                {
                    text: enteredData,
                    id: Math.random().toString(),
                    isCompleted: false
                }
            ];
        });
    };

    const deleteHandler = todoId => {
        const filteredTodos = todoArray.filter(todo => todo.id !== todoId);
        setTodoArray(filteredTodos);
    };

    const strokeHandler = (todoId, isDone) => {
        const filteredTodos = todoArray.map(todo => {
            if (todo.id === todoId) {
                todo.isCompleted = isDone;
            }
            return todo;
        });
        setTodoArray(filteredTodos);
    };

    return (
        <div className={styles.container}>
            <Header />
            <NewTodo onAddTodo={addTodoHandler} />
            <TodoList
                todos={todoArray}
                onDeleteTodo={deleteHandler}
                onStrokeTodo={strokeHandler}
            />
        </div>
    );
};

export default App;
