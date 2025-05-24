import Carousel from '../components/StoreSeriesCarousel.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
    return (
        <div>
            <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="lexend-deca-bold text-4xl" style={{ position: 'relative', top: '-20px' }}>Blindboxes</h2>
            </div>
            <Carousel />
            <WideButton text={"SELECT"} clickFunction={() => props.setCurrentPage('series')}/>
        </div>
    );
}

export default Store;