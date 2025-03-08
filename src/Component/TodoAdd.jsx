import { useContext, useState } from "react";
import ContextTodo from "../Context/ContextTodo";

const TodoAdd = () => {
  const {dispatch} = useContext(ContextTodo);
  const [task, setTask] = useState('');

  const sendTask = () =>{
    let tastAttr = {type:'add',payload:task}; 
    dispatch(tastAttr);
    setTask('');
  }
  return (
    <>
      <div className="todo-input">
        <input
          type="text"
          id="todo-text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button id="add-btn" onClick={sendTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
