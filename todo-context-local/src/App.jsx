import 'semantic-ui-css/semantic.min.css'
import { TodoContextProvider } from './contexts'
import { addTodoFn, deleteTodoFn } from './todo-functions/todofunctions'
import { Header, TodoForm, TodoList } from './todo-components'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {

    console.dir(todo)
    let newTodos = [{ id: Date.now(), ...todo }, ...todos]
    console.log(newTodos)
    //addTodoFn(todo, setTodos)
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    console.log("id: ", id)
    let newTodos = todos.filter(todo => todo.id != id)

    setTodos(newTodos)
  }

  const editTodo = (id, todo) => {
    let edditedList = todos.map((t) => {
      if (id == t.id) {
        return todo
      }
      else {
        return t;
      }
    })

    console.dir(todos)
    console.log(edditedList)
    console.log(todo)
    setTodos(edditedList)
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])



  useEffect(() => {
    console.log(todos.length)
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Header></Header>

      <TodoContextProvider value={{ todos, todo, setTodo, addTodo, deleteTodo, editTodo }}>


        <TodoForm></TodoForm>
        <br></br><br></br>
        <div className="scroll-grid">
          <TodoList></TodoList>
        </div>
      </TodoContextProvider>
    </div>

  )
}

export default App
