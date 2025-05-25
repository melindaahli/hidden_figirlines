import { useState, useEffect } from 'react'
import './App.css'
import Alert from './components/Alert'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Game from './pages/Game'
import Store from './pages/Store'
import Shelf from './pages/Shelf'
import Series from './pages/Series'
import Info from './pages/Info'
import Background from './components/Background.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currency, setCurrency] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(1);

  const [chosenSeriesIndex, setChosenSeriesIndex] = useState(0);

  let [collectedFigures, setCollectedFigures] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState("error");

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'game':
        return <Game setCurrentPage={setCurrentPage}
                     currency={currency} setCurrency={setCurrency}
                     setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} setAlertType={setAlertType} />;
      case 'store':
        return <Store setCurrentPage={setCurrentPage}
                      currentCarouselIndex={currentCarouselIndex} setCurrentCarouselIndex={setCurrentCarouselIndex}
                      chosenSeriesIndex={chosenSeriesIndex} setChosenSeriesIndex={setChosenSeriesIndex} />;
      case 'shelf':
        return <Shelf collectedFigures={collectedFigures} />;
      case 'series':
        return <Series setCurrentPage={setCurrentPage}
                       currency={currency} setCurrency={setCurrency}
                       collectedFigures={collectedFigures} setCollectedFigures={setCollectedFigures}
                       chosenSeriesIndex={chosenSeriesIndex}
                       setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} setAlertType={setAlertType} />;
      case 'info':
        return <Info setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (

    <>
      <NavBar setCurrentPage={setCurrentPage} currency={currency} />

      {showAlert && (
        <div className="fixed inset-0 flex top-20 h-[55px] justify-center">
          <Alert message={alertMessage} type={alertType} />
        </div>)}

      <Background />
   
      <div className="flex flex-row h-full content-center justify-center items-center overflow-y-auto  mt-15">
        {renderPage()}
      </div>
    </>
  )
}

export default App
