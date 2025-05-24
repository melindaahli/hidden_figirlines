import WideButton from '../components/WideButton.jsx';
import overlayImage from '../assets/logooo.png';

function Home(props) {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="bg-[#FAF8F0] px-8 py-6 rounded-xl flex flex-col items-center">
                <img 
                    src={overlayImage} 
                    alt="Logo" 
                    className="w-64 md:w-80 lg:w-96 object-contain" 
                />
                <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-[#FCC8BA] gaegu-regular">
                    hidden figirlines
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
                <div className="w-64">
                    <WideButton text="PLAY" clickFunction={() => props.setCurrentPage('game')} />
                </div>
                <div className="w-64">
                    <WideButton text="STORE" clickFunction={() => props.setCurrentPage('store')} />
                </div>
            </div>
        </div>
    );
}

export default Home;
