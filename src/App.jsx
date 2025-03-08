import TodoAdd from "./Component/TodoAdd";
import TodoList from "./Component/TodoList";
import TodoReset from "./Component/TodoReset";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoAdd/>
        <TodoList/>
        <TodoReset/>
      </div>
      </ContextProvider> 
  );
}

export default App;
