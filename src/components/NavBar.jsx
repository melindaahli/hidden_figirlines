function NavBar(props) {

    return (
        <div className="sticky top-0">
            <div className="navbar bg-base-200 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lexend-deca-regular">
                            <li>
                                <button onClick={() => props.setCurrentPage('game')}>GAME</button>
                            </li>
                            <li>
                                <button onClick={() => props.setCurrentPage('store')}>OPEN</button>
                            </li>
                            <li>
                                <button onClick={() => props.setCurrentPage('shelf')}>SHELF</button>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-ghost text-xl lexend-deca-bold"
                        onClick={() => props.setCurrentPage('home')}>
                        figirlines
                    </button>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lexend-deca-regular">
                        <li>
                            <button onClick={() => props.setCurrentPage('game')}>GAME</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('store')}>OPEN</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('shelf')}>SHELF</button>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn gaegu-regular rounded-4xl bg-white">coins {props.currency}</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
