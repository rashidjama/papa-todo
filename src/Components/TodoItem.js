import React, { useState } from "react";
import EditForm from "./EditForm";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "../Styles/TodoItem.module.css";
import Paper from "@material-ui/core/Paper";

function TodoItem({
  task,
  removeTask,
  updateTask,
  id,
  toggleCompleted,
  completed,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleEditForm = () => setIsOpen(!isOpen);
  let result;
  if (isOpen) {
    result = (
      <EditForm
        task={task}
        updateTask={updateTask}
        id={id}
        toggleEditForm={toggleEditForm}
      />
    );
  } else {
    result = (
        <Paper>
          <div className={styles.todo_item}>
            <div>
              <Checkbox
                color="secondary"
                onClick={() => toggleCompleted(id)}
                checked={completed}
                variant="primary"
              />
              {completed ? (
                <span className={styles.task_done}>{task}</span>
              ) : (
                <span>{task}</span>
              )}
            </div>
            <span>
              <button onClick={toggleEditForm}>Edit</button>
              <button onClick={() => removeTask(id)}>
                <span>&#215;</span>
              </button>
            </span>
          </div>
        </Paper>

    );
  }
  return result;
}

export default TodoItem;
