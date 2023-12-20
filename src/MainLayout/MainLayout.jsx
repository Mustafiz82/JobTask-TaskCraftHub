import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1>hello eorld</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;