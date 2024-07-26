import { useContext, useState } from "react";
import { TodoContext } from "../contexts";


export default function TodoForm() {

    const[desc, setDesc]=useState()
    const[isCompleted, setIsComplete]= useState(false)
    let todo={}
    const[disabled, setdDisabled] =useState(true)

    const todoContext= useContext(TodoContext)

    return (
        <div className="ui grid">
            <form className="ui form column">
                <div className="field"><label>Add Todo</label>
                    <input 
                    placeholder="Description" 
                    onChange={(e)=>{
                        setDesc(e.target?.value)
                        setdDisabled(false);
                        }}
                    value={desc}    
                        />
                </div>

                <div className="field"><div className="ui checkbox">
                    <input type="checkbox" onChange={(e)=>{
                        setIsComplete(e.target?.value)
                       
                        }}/>
                    <label>Completed?</label>
                </div>
                </div>
                <button 
                className="ui button" 
                onClick={(e)=>{
                    e.preventDefault()
                    console.log(desc, isCompleted)
                    debugger
                    todo={
                        'desc':desc,
                        'completed':isCompleted
                    }
                   
                    setDesc('');
                    todoContext.addTodo(todo)
                    setdDisabled(true)

                }}
                disabled={disabled}
                >Submit</button>
            </form>
        </div>
    )
}