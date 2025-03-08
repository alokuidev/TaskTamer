import TodoAdd from "./Component/TodoAdd";
import TodoList from "./Component/TodoList";
import TodoReset from "./Component/TodoReset";

function App() {
  return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoAdd/>
        <TodoList/>
        <TodoReset/>
      </div>
  );
}

export default App;
