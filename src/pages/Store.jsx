import RightButton from '../components/RightButton.jsx'
import LeftButton from '../components/LeftButton.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
    return (
        <div>
            <RightButton />
            <LeftButton />
            <WideButton text={"SELECT"} clickFunction={() => props.setCurrentPage('series')}/>
        </div>
    );
}

export default Store;