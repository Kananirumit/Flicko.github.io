import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';


export default function Layout() {
    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    {/* <Outlet /> */}
                </div>
                <Footer />
            </div>

        </div>
    );
}
