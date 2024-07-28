import { useContext, useEffect } from "react"
import { TodoContext } from "../contexts"
import { Display } from ".";


export default function TotoList(params) {
    const { todos, deleteTodo } = useContext(TodoContext);

    useEffect(() => {
      
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])

    console.dir("from list: " + todos)
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