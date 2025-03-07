import React, { useContext, useEffect } from "react";
import UseContext from "../Context/UseContext";

const TodoList = () => {
  const { taskState } = useContext(UseContext);

  useEffect(() => {
    console.log(taskState.taskList.length);
  }, [taskState]);
  return (
    <>
      <ul id="todo-list">
        {taskState.taskList &&
          taskState.taskList.map((elem) => {
            return (
              <li className="todo-item" key={elem.id}>
                <input type="checkbox" className="toggle-complete" />
                <span className="task-text">{elem.name}</span>
                <button className="delete-btn">❌</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default TodoList;
