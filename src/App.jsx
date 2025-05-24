import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Game from './pages/Game'
import Shelf from './pages/Shelf'
import Store from './pages/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Game />
      <Shelf />
      <Store />
      {/* this is comment, */}
      <div>
        {/* keeping this for now so that we can see how to easily add images to page. */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
