import { useReducer } from "react";
import { nanoid } from "nanoid";
import UseContext from "./UseContext";
    
const initialValue = {
    taskList:[],
}

const TaskFun = (state,action) =>{
        switch (action.type) {
            case 'add':{
                const newTask = {
                    id:nanoid(),
                    name:action.payload,
                    status:false
                };
                return {taskList: [...state.taskList,newTask]}}
            case 'delete':
                return { taskList: state.taskList.filter((elem) => elem.id !== action.payload)}
            case 'check':
                return  { taskList: state.taskList.map((elem) => elem.id === action.payload ? {...elem,status:true} : elem)}    
            default:
                return {taskList : []}
        }
}
const ContextProvider = ({children}) =>{

    const [taskState, dispatcher]= useReducer(TaskFun, initialValue);

    return(
        <UseContext.Provider value={{taskState,dispatcher}}>
            {children}
        </UseContext.Provider>
    )
}

export default ContextProvider;