

export const addTodoFn = (todo, setTodos) => {
  
    setTodos((prev) => { return [{id:Date.now(), ...todo}, ...prev] })
}

export const deleteTodoFn = (id, setTodos) => {
    setTodos((prev) => { return prev.filter(i=>i!=id) })
}

