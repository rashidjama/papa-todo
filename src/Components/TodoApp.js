import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "uuid";
import styles from "../Styles/TodoApp.module.css";

function TodoApp() {
  const initialQoutes = {
    qoute: "",
    author: "",
  };

  const initialValue = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialValue);
  const [qoute, setQoute] = useState(initialQoutes);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const getQoutes = async () => {
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.length + 1);
          setQoute({
            qoute: data[randomIndex].text,
            author: data[randomIndex].author,
          });
        });
    };
    getQoutes();
  }, []);

  const addTask = (newTask) => {
    newTask = newTask[0].toUpperCase() + newTask.slice(1);
    setTodos([...todos, { task: newTask, id: uuid(), completed: false }]);
  };
  const removeTask = (id) => {
    const updatedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTasks);
  };
  const updateTask = (id, newTask) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      } else {
        return todo;
      }
    });
    setTodos(updatedTask);
  };
  const toggleCompleted = (id) => {
    const completedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(completedTodo);
  };
  return (
    <div className={styles.todo_app}>
      <nav>
        <h1>To Do List App</h1>
      </nav>
      <header>
        <p>
          <strong>Qoute of the day:</strong> {qoute.qoute} By:
          <span className={styles.author}> {qoute.author}</span>
        </p>
      </header>
      <main>
        <TodoForm addTask={addTask} />
        <TodoList
          todos={todos}
          removeTask={removeTask}
          updateTask={updateTask}
          toggleCompleted={toggleCompleted}
        />
      </main>
    </div>
  );
}

export default TodoApp;
