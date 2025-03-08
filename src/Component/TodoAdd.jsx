
const TodoAdd = () => {
  
  return (
    <>
      <div className="todo-input">
        <input
          type="text"
          id="todo-text"
          placeholder="Enter a task..."
        />
        <button id="add-btn">
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
