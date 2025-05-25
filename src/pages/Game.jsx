import { FaRegQuestionCircle } from 'react-icons/fa';
import GameSlots from '../components/GameSlots.jsx';

function Game({ currency, setCurrency, setCurrentPage, setShowAlert, setAlertMessage, setAlertType}) {
  return (
    <div className="relative">
      {/* Question mark icon in top-right corner */}
      <button
        onClick={() => setCurrentPage('info')}
        className="absolute top-8 left-1/2 -translate-x-1/2 translate-x-[90px] text-[#794F41] hover:text-[#A86B5A] transition-colors"
        aria-label="Help"
      >
        <FaRegQuestionCircle size={28} />
      </button>

      <GameSlots currency={currency} setCurrency={setCurrency}
                 setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} setAlertType={setAlertType} />
    </div>
  );
}

export default Game;
