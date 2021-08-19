import React, { useState } from "react";
import styles from '../Styles/TodoForm.module.css'

function TodoForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <form className={styles.todo_form}>
      <input value={value} onChange={handleChange} placeholder="Write new task here..."/>
      <button type="submit" onClick={handleSubmit}>
        Add New Todo
      </button>
    </form>
  );
}

export default TodoForm;
