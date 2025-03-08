import { useContext } from "react";
import ContextTodo from "../Context/ContextTodo";

const TodoList = () => {
  const { state, dispatch } = useContext(ContextTodo);
  console.log(state.taskList);
  
  return (
    <>
      <ul id="todo-list">
        {state.taskList.map((elem) => {
          console.log(elem.IsCompleted)
          return (
            <li className="todo-item" key={elem.id}>
              <input type="checkbox" className="toggle-complete" checked={elem.IsCompleted} onChange={() =>dispatch({type:'status',payload:elem.id})} value={elem.id}/>
              <span className={`task-text ${elem.IsCompleted ? 'completed' : ''}`}>{elem.name} | {elem.IsCompleted ? 'true' : 'false' }</span>
              <button className="delete-btn" onClick={() => dispatch({type:'del',payload:elem.id})}>❌</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
