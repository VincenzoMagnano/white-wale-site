import { FC } from 'react';
import './Navbar.css';

interface NavbarProps {
    toggleMenu: () => void;
    menuOpen: boolean;
}
const Navbar: FC<NavbarProps> = ({ toggleMenu, menuOpen }) => {



    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <img
                        className="nav-logo"
                        src="white-wale-logo.png"
                        alt="logo"
                    />
                    <div>

                    <button className="burger-menu" onClick={toggleMenu}>
                        <img
                            className="menu-icon"
                            src="burger-menu.png"
                            alt="burger menu"
                        />
                    </button>
                
                    <img src="logout.png" alt="logout"
                    className='logout-icon' />
                    </div>
                </div>
                <ul
                    className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-link">PRENOTA</li>
                    <li className="nav-link">ABOUT US</li>
                    <li className="nav-link">SAMPLE PACK</li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;
