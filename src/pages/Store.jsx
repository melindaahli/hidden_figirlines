import { useState } from 'react';
import Carousel from '../components/StoreSeriesCarousel.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
      
    const [currentIndex, setCurrentIndex] = useState(1);

    const selectSeries = () => {
        props.setCurrentPage('series');
        props.setChosenSeriesIndex(currentIndex);
    };

    return (
        <div>
            <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="lexend-deca-bold text-4xl" style={{ position: 'relative', top: '-20px' }}>Blindboxes</h2>
            </div>
            <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <div style={{ display: "flex", justifyContent: "center"}}>
                <WideButton text={"SELECT"} clickFunction={() => selectSeries()}/>
            </div>
        </div>
    );
}

export default Store;