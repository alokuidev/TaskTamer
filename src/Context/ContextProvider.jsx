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
                    name:action.payload
                };
                return {taskList: [...state.taskList,newTask]}}
            default:
                return state;
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