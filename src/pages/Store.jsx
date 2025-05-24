import Carousel from '../components/StoreSeriesCarousel.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
    return (
        <div>
            <Carousel />
            <div style={{ display: "flex", justifyContent: "center"}}>
                <WideButton text={"SELECT"} clickFunction={() => props.setCurrentPage('series')}/>
            </div>
        </div>
    );
}

export default Store;