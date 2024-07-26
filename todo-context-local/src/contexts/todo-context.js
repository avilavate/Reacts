import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
       { id:0,
        todo:"Todo Message!",
        complete:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider=TodoContext.Provider;

export default TodoContext;