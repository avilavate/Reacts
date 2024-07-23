import { useState } from 'react'
import {Layout} from './layout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className='bg-green-400'>
      Hello
    <Layout></Layout>
    </div>  
   
    </>
  )
}

export default App
