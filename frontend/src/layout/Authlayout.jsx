import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Authlayout() {
    return (
        <div className="auth-layout">
            <div style={{ backgroundColor: '#4E73DF' }}>
            <div className="auth-content">
                <Outlet />
            </div>
            </div>
        </div>
    );
}
