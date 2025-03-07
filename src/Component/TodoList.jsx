import React from 'react'

const TodoList = () => {
  return (
    <>
        <ul id="todo-list">
          <li className="todo-item">
            <input type="checkbox" class="toggle-complete" />
            <span className="task-text">Task Name</span>
            <button className="delete-btn">❌</button>
          </li>
        </ul> 
    </>
  )
}
export default TodoList
