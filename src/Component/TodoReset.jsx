import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'

const TodoReset = () => {
  const {dispatcher} = useContext(UseContext);
  return (
    <>
        <button id="reset-btn" className="reset" onClick={() => dispatcher({type:'reset'})}>
          Reset All
        </button> 
    </>
  )
}

export default TodoReset
