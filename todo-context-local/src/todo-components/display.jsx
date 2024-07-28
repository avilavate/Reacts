import { useState } from "react"
import { TodoContext } from "../contexts"
import { useContext } from "react"

export default function Display({ todo }) {


    const [startEditing, setStartEdinting] = useState(false)
    const { deleteTodo, editTodo } = useContext(TodoContext);
    const [editedTodo, setEditedTodo] = useState({});

    const onEdit = () => {
        setEditedTodo(todo);
        setStartEdinting(true);
    }

    const onAdding = () => {

        editTodo(editedTodo.id, editedTodo);
        setStartEdinting(false);
    }

    const toggleComplte = () => {
        setEditedTodo({
            ...editedTodo,
            completed: !editedTodo.completed
        }
        )
    }

    if (!startEditing) {
        return (
            <div className="ui grid grid-pad action input" >
                <button className="ui icon button" disabled={true} >
                    <i aria-hidden="true" className={todo.completed ? "thumbs up icon" : "thumbs down icon"}></i>
                </button>

                < input type="text" placeholder="Todo..." value={todo.desc} disabled={true} />
                <button className="ui icon button" onClick={() => deleteTodo(todo.id)}>
                    <i aria-hidden="true" className="archive icon"></i>
                </button>
                <button className="ui icon button" onClick={() => { onEdit() }}>
                    <i aria-hidden="true" className="edit icon"></i>
                </button>
            </div>

        )
    }
    else {
        return (
            <div className="ui grid grid-pad action input" >

                <button className="ui icon button" onClick={() => { toggleComplte() }} >
                    <i aria-hidden="true" className={editedTodo.completed ? "thumbs up icon" : "thumbs down icon"}></i>
                </button>
                < input
                    type="text"

                    value={editedTodo.desc}

                    onChange={(e) => {

                        setEditedTodo({
                            ...editedTodo,
                            desc: e.target?.value,

                        })

                    }} />

                <button className="ui icon button" onClick={() => { onAdding() }}>
                    <i aria-hidden="true" className="save outline icon"></i>
                </button>


            </div>
        )
    }
}
