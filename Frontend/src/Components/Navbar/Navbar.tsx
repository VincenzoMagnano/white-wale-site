
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useMenu } from '../../Provider/MenuContext';
import { useState } from 'react';


const Navbar = () => {

    const { menuOpen, toggleMenu } = useMenu();

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handelLogout = () => {
        setLogin(false);
        navigate('/LoginPage');
    }



    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <img
                        style={{ cursor: 'pointer' }}
                        className="nav-logo"
                        src="white-wale-logo.png"
                        alt="logo"
                    />
                    <div className="log-links-container">

                        <button className="burger-menu"
                            onClick={toggleMenu}>

                            <img
                                className="menu-icon"
                                src="burger-menu.png"
                                alt="burger menu"
                            />
                        </button>
                            
                        <button onClick={() => setLogin(!login)}>
                            {!login ? (
                                <div className="btn-inside">
                                    <p className="log-text">Login</p>
                                    <img
                                        src="login.png" alt="login"
                                        className='login-icon' />
                                </div>
                            ) : (
                                <div className="btn-inside">
                                        <p className="log-text">Logout</p>
                                    <img src="logout.png" alt="logout" className='logout-icon' />
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <ul
                    className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/LandingPage">
                        <li className="nav-link">HOME</li>
                    </Link>
                    <Link to="/Prenota">
                    <li className="nav-link">PRENOTA</li>
                    </Link>
                    <Link to="/AboutUs">
                        <li className="nav-link">ABOUT US</li>
                    </Link>
                    <li className="nav-link">SAMPLE PACK</li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;


//0645263160