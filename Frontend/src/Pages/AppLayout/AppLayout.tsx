
import { useMenu } from '../../Provider/MenuContext';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {

    const { menuOpen, toggleMenu } = useMenu();
    return (
        <>
            <div
                onClick={menuOpen ? toggleMenu : undefined}
                className="format-page">
                <div className="page-container">
                    <Navbar/>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AppLayout
