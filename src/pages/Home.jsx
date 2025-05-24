import WideButton from '../components/WideButton.jsx'

function Home(props) {
    return (
        <div>
            This is the Home page.
            {/* to do: 
            1. what goes on top of the buttons?
            2. add spacing between the buttons (try div wrapping them and searching 'tailwindcss vertical flex')
            */}
            <div className="flex flex-col space-y-4 mt-4">
                <WideButton text={"PLAY"} clickFunction={() => props.setCurrentPage('game')} />
                <WideButton text={"STORE"} clickFunction={() => props.setCurrentPage('store')} />
            </div>
        </div>
    );
}

export default Home;
