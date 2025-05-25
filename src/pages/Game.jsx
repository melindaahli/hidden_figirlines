import { FaRegQuestionCircle } from 'react-icons/fa';
import GameSlots from '../components/GameSlots.jsx';

function Game({ currency, setCurrency, setCurrentPage }) {
  return (
    <div className="relative">
      {/* Question mark icon in top-right corner */}
      <button
        onClick={() => setCurrentPage('info')}
        className="absolute top-4 right-4 text-[#794F41] hover:text-[#A86B5A] transition-colors"
        aria-label="Help"
      >
        <FaRegQuestionCircle size={28} />
      </button>

      <GameSlots currency={currency} setCurrency={setCurrency} />
    </div>
  );
}

export default Game;
