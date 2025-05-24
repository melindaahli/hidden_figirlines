import Carousel from '../components/StoreSeriesCarousel.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
    return (
        <div>
            <Carousel />
            <WideButton text={"SELECT"} clickFunction={() => props.setCurrentPage('series')}/>
        </div>
    );
}

export default Store;