import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>{count} likes</h2>
        <span onClick={() => { setCount(count + 1) }}>👍🏻</span>
        <span onClick={() => { setCount(count - 1) }}>👎🏻</span>
       <h3>Like or dislike to increase/decrease</h3>
      </div>
    </>
  )
}

export default App
