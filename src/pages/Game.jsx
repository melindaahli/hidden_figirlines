import GameSlots from '../components/GameSlots.jsx'

function Game({ currency, setCurrency }) {
    return (
        <div>
            <GameSlots currency={currency} setCurrency={setCurrency}/>
        </div>
    );
}

export default Game;