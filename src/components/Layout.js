import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;