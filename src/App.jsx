import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './Components/View'
import Tables from './Components/Tables'
import Add from './Components/Add'
import Bar from './Components/Bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <h1>Movie App</h1>
      <View/>
      <Tables/>
      <Add/>
      <Bar/>
      </div>
    </>
  )
}

export default App
