function NavBar(props) {

    return (

        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <button className="btn btn-ghost text-xl" 
                            onClick={() => props.setCurrentPage('home')}>
                                figirlines
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <button onClick={() => props.setCurrentPage('game')}>game</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('store')}>open</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('shelf')}>shelf</button>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">coins {props.currency}</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
