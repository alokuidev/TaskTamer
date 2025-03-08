import React, { useContext, useEffect } from "react";
import UseContext from "../Context/UseContext";

const TodoList = () => {
  const { taskState,dispatcher } = useContext(UseContext);

  const checkTask = (e, id) =>{
        console.log(e.target.checked)
        if(e.target.checked){
            dispatcher({type:'check', payload:id})
        }
  } 

  return (
    <>
      <ul id="todo-list">
        {taskState.taskList &&
          taskState.taskList.map((elem) => {
            return (
              <li className="todo-item" key={elem.id}>
                <input type="checkbox" className="toggle-complete" value={elem.id} onClick={(e) =>checkTask(e,elem.id)} />
                <span className={`task-text ${elem.status ? 'completed' : ''}`}>{elem.name}</span>
                <button className="delete-btn" onClick={() => dispatcher({type:'delete',payload:elem.id})}>❌</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default TodoList;
