import { useContext } from "react"
import { TodoContext } from "../contexts"
import { Display, TodoList } from ".";


export default function TotoList(params) {
    const { todos, deleteTodo } = useContext(TodoContext);
    
    console.dir("from list: "+todos)
    return (
        <>
            {todos.map(todo => {
                
                return (
                   
                      <Display todo={todo}></Display>
                  
                )
            }

            )}
        </>


    )
}