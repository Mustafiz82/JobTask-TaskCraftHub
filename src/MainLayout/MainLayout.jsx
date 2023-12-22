import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Home/Nav';
import Footer from '../Pages/Home/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;