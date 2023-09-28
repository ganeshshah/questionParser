import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

//! not in use
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;