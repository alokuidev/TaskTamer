import React, { useContext, useState } from "react";
import UseContext from "../Context/UseContext";

const TodoAdd = () => {
  const { dispatcher } = useContext(UseContext);
  const [taskName, setTaskName] = useState("");

  const pushTask = () => {
    if (taskName.trim() !== "") {
      let newAction = { type: "add", payload: taskName };
      dispatcher(newAction);
      setTaskName("");
    }
  };
  return (
    <>
      <div className="todo-input">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          id="todo-text"
          placeholder="Enter a task..."
        />
        <button id="add-btn" onClick={pushTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
