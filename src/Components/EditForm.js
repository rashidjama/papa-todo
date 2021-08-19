import React, { useState } from "react";
import styles from '../Styles/TodoForm.module.css'

function EditForm({task, updateTask, id, toggleEditForm}) {
  const [value, setValue] = useState(task);
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id, value);
    toggleEditForm();
  };
  return (
    <form className={styles.todo_form}>
      <input value={value} onChange={handleChange} autoFocus/>
      <button type="submit" onClick={handleSubmit}>
        Update task....
      </button>
    </form>
  );
}

export default EditForm;
