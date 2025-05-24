function NavBar(props) {

    return (
        <div>
            <button onClick={() => props.setCurrentPage('home')}>home</button>
            <button onClick={() => props.setCurrentPage('game')}>game</button>
            <button onClick={() => props.setCurrentPage('store')}>open</button>
            <button onClick={() => props.ssetCurrentPage('shelf')}>shelf</button>
        </div>
    );
}

export default NavBar;
