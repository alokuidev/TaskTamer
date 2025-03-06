

function App() {

  return (
    <>
       <div className="todo-container">
        <h1>Todo List</h1>
        
        <div className="todo-input">
            <input type="text" id="todo-text" placeholder="Enter a task..."/>
            <button id="add-btn">Add Task</button>
        </div>

        <ul id="todo-list"></ul>

        <button id="reset-btn" className="reset">Reset All</button>
    </div>

    </>
  )
}

export default App
