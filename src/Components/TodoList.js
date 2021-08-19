import React from "react";
import TodoItem from "./TodoItem";
import FlipMove from "react-flip-move";

function TodoList({ todos, removeTask, updateTask, toggleCompleted }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          task={todo.task}
          completed={todo.completed}
          removeTask={removeTask}
          id={todo.id}
          key={todo.id}
          updateTask={updateTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
