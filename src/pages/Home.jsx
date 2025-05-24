import WideButton from '../components/WideButton.jsx'

function Home(props) {
    

    return (
    <div>
        This is the Home page.
        {/* to do: 
        1. what goes on top of the buttons?
        2. add spacing between the buttons (try div wrapping them and searching 'tailwindcss vertical flex')
        */}
        <WideButton text={"PLAY"} clickFunction={() => props.setCurrentPage('game')}/>
        <WideButton text={"OPEN"} clickFunction={() => props.setCurrentPage('store')}/>
    </div>
    );
}

export default Home;