import Carousel from '../components/StoreSeriesCarousel.jsx'
import WideButton from '../components/WideButton.jsx'

function Store(props) {
   const selectSeries = () => {
       props.setCurrentPage('series');
       props.setChosenSeriesIndex(props.currentCarouselIndex);
   };

   return (
       <div>
           <div className="flex flex-col text-center">
           <h1 className="lexend-deca-bold text-4xl mt-10 m-5">Blindboxes</h1>
           </div>
           <Carousel currentIndex={props.currentCarouselIndex} setCurrentIndex={props.setCurrentCarouselIndex} />
           <div className="mt-5" style={{ display: "flex", justifyContent: "center"}}>
               <WideButton text={"SELECT"} clickFunction={() => selectSeries()}/>
           </div>
       </div>
   );
}

export default Store;