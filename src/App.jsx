import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Game from './pages/Game'
import Store from './pages/Store'
import Shelf from './pages/Shelf'
import Series from './pages/Series'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currency, setCurrency] = useState(0);

  const [chosenSeriesIndex, setChosenSeriesIndex] = useState(0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'game':
        return <Game />;
      case 'store':
        return <Store setCurrentPage={setCurrentPage} chosenSeriesIndex={chosenSeriesIndex} setChosenSeriesIndex={setChosenSeriesIndex}/>;
      case 'shelf':
        return <Shelf />;
      case 'series':
        return <Series setCurrentPage={setCurrentPage} chosenSeriesIndex={chosenSeriesIndex} />;
      default:
        return <Home />;
    }
  };

  return (
    <> 
      <NavBar setCurrentPage={setCurrentPage} currency={currency}/>
      <div className="flex flex-row h-svh justify-center items-center">
        {renderPage()}
      </div>
    </>
  )
}

export default App
