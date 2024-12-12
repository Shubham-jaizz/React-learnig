import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            content:"hello world",
            checked:false
        }
    ],
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
    toggleCheck:()=>{}


})
export const TodoContextProvider = TodoContext.Provider;

export  function useTodoContext(params) {
     return useContext(TodoContext);    
}