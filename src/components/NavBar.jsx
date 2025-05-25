import logoo from "../assets/logo_brown.png"
import coin from "../assets/Coin.png"

function NavBar(props) {

    return (
        <div className="sticky top-0 z-50">
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
                                <button onClick={() => props.setCurrentPage('store')}>STORE</button>
                            </li>
                            <li>
                                <button onClick={() => props.setCurrentPage('shelf')}>SHELF</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="text-2xl lexend-deca-bold flex items-center gap-2" onClick={() => props.setCurrentPage('home')}>
                            <img className="h-7 object-contain"
                                src={logoo}
                                alt="Logo"
                            />
                            <span>
                                fi<span style={{ color: '#4B966D' }}>girl</span>ines
                            </span>
                        </button>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal lexend-deca-regular flex gap-x-18">
                        <li>
                            <button onClick={() => props.setCurrentPage('game')}>GAME</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('store')}>STORE</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentPage('shelf')}>SHELF</button>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="gaegu-regular rounded-4xl bg-white flex items-center gap-2.5 pl-2.5 pr-2.5 py-1.5 text-sm font-semibold shadow transition">
                        <img className="h-7 object-contain" src={coin} alt="coin" />
                        {props.currency}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
