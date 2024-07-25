import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Card from './card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <h1>User Card</h1>
      <Card></Card>
    </div>
  )
}

export default App
