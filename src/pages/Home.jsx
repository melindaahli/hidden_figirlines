import WideButton from '../components/WideButton.jsx';
import overlayImage from '../assets/logo_circle_FIXED.png';

function Home(props) {
    return (
        <div className="flex flex-col items-center py-8">
                <div className="bg-[#FAF8F0] px-8 -mb-4 -mt-8 rounded-xl flex flex-col items-center">
                    <img 
                        src={overlayImage} 
                        alt="Logo" 
                        className="w-64 md:w-80 lg:w-96 object-contain" 
                    />
                </div>
                <div className="flex flex-col items-center space-y-2 mt-10">
                    <div className="w-64">
                        <WideButton text="PLAY" clickFunction={() => props.setCurrentPage('game')} />
                    </div>
                    <div className="w-64">
                        <WideButton text="STORE" clickFunction={() => props.setCurrentPage('store')} />
                    </div>
                    <div className="w-64">
                    <WideButton text="SHELF" clickFunction={() => props.setCurrentPage('shelf')} />
                    </div>
                </div>
            </div>
    );
}

export default Home;
