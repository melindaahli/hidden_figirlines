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
  const [currency, setCurrency] = useState(0);

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
      <NavBar setCurrentPage={setCurrentPage} currency={currency}/>
      {renderPage()}
    </>
  )
}

export default App
