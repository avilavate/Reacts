import { useContext } from "react"
import { TodoContext } from "../contexts"
import { TodoList } from ".";


export default function TotoList(params) {
    const { todos, deleteTodo } = useContext(TodoContext);
    
    console.dir("from list: "+todos)
    return (
        <>
            {todos.map(todo => {
                
                return (
                   
                        <div className="ui grid grid-pad action input" key={todo.id}>
                        <button className="ui icon button">
                                <i aria-hidden="true" className="thumbs up icon"></i>
                            </button>
                            <input type="text" placeholder="Todo..." value={todo.desc}/>
                            <button className="ui icon button" onClick={()=>deleteTodo(todo.id)}>
                                <i aria-hidden="true" className="archive icon"></i>
                            </button>
                            <button className="ui icon button">
                                <i aria-hidden="true" className="plus icon"></i>
                            </button>

                        </div>

                  
                )
            }

            )}
        </>


    )
}