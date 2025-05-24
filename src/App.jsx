import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Game from './pages/Game'
import Store from './pages/Store'
import Shelf from './pages/Shelf'


function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'game':
        return <Game />;
      case 'store':
        return <Store />;
      case 'shelf':
        return <Shelf />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
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
