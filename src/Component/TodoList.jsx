
const TodoList = () => {
  

  return (
    <>
      <ul id="todo-list">
              <li className="todo-item" >
                <input type="checkbox" className="toggle-complete"  />
                <span className="task-text" >name</span>
                <button className="delete-btn" >❌</button>
              </li>
      </ul>
    </>
  );
};
export default TodoList;
