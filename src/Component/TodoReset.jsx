import { useContext } from "react"
import ContextTodo from "../Context/ContextTodo"

const TodoReset = () => {
  const {dispatch} = useContext(ContextTodo);
  return (
    <>
        <button id="reset-btn" className="reset" onClick={() => dispatch({type:'reset'})}>
          Reset All
        </button> 
    </>
  )
}

export default TodoReset
