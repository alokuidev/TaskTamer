import React, { useReducer } from 'react'
import ContextTodo from './ContextTodo'

const initialState = {
    taskList:[]
}

const todoReducer = (state,action) =>{
    switch(action.type){
        case 'add':{
            const newTasks = {
                id:Date.now(),
                name:action.payload,
                IsCompleted:false
            }
            return {taskList:[...state.taskList,newTasks]}
        }
        case 'del':
            return {taskList:state.taskList.filter((elem) => elem.id !== action.payload)}
        case 'status':
            return {taskList:state.taskList.map((elem) => elem.id === action.payload ? {...elem, IsCompleted: !elem.IsCompleted} : elem )}    
        default:
            return {taskList:state.taskList.map((elem) =>({...elem,IsCompleted:false}))}       
    }
}
const ContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(todoReducer,initialState)  

  return (
    <ContextTodo value={{state,dispatch}}>
      {children}
    </ContextTodo>
  )
}

export default ContextProvider
