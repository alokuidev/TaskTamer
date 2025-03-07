function App() {
  return (
    <>
      <div className="todo-container">
        <h1>Todo List</h1>

        <div className="todo-input">
          <input type="text" id="todo-text" placeholder="Enter a task..." />
          <button id="add-btn">Add Task</button>
        </div>

        <ul id="todo-list">
          <li className="todo-item">
            <input type="checkbox" class="toggle-complete" />
            <span className="task-text">Task Name</span>
            <button className="delete-btn">❌</button>
          </li>
        </ul>

        <button id="reset-btn" className="reset">
          Reset All
        </button>
      </div>
    </>
  );
}

export default App;
