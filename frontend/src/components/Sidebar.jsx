import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFaceLaughWink } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div style={{ width: '260px', backgroundColor: '#4e73df', height: '100%' }}>
            <Navbar bg="primary" variant="dark" className="flex-column p-3">
                <Navbar.Brand href="/index" className="d-flex align-items-center justify-content-center">
                    <div className="text-white rotate-n-15">
                        <FaFaceLaughWink size={30} />
                    </div>
                    <div className="mx-3 text-white font-weight-bold">
                        SB Admin <sup>2</sup>
                    </div>
                </Navbar.Brand>
            </Navbar>
            <hr className="sidebar-divider bg-light my-1" />
            <Nav className="flex-column text-white">
                <Nav.Link href="/" className="d-flex align-items-center px-3 py-2 text-white">
                    <FaTachometerAlt className="me-2" />
                    <span>Dashboard</span>
                </Nav.Link>
                <hr className="sidebar-divider bg-light my-1" />
                <div className="sidebar-heading px-3 py-1 text-uppercase small" style={{ color: '#899ED9', fontWeight: 'bold' }}>
                    Interface
                </div>
                <NavDropdown
                    title={<span className="text-white"><IoSettingsSharp className="me-2" />Components</span>}
                    id="nav-dropdown-components"

                >
                    <NavDropdown.Item
                        href="/buttons"
                        className="text-wrap"
                    >
                        Buttons
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="/cards"
                        className="text-wrap"
                    >
                        Cards
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span className="text-white"><FaWrench className="me-2" />Utilities</span>} id="nav-dropdown-utilities">
                    <NavDropdown.Item href="/utilities-color" className="text-wrap">Colors</NavDropdown.Item>
                    <NavDropdown.Item href="/utilities-border" className="text-wrap">Borders</NavDropdown.Item>
                    <NavDropdown.Item href="/utilities-animation" className="text-wrap">Animations</NavDropdown.Item>
                    <NavDropdown.Item href="/utilities-other" className="text-wrap">Other</NavDropdown.Item>
                </NavDropdown>
                <hr className="sidebar-divider bg-light my-1" />
                <div className="sidebar-heading px-3 py-1 text-uppercase small" style={{ color: '#899ED9', fontWeight: 'bold' }}>
                    Addons
                </div>
                <NavDropdown title={<span className="text-white"><FaFolder className="me-2" />Pages</span>} id="nav-dropdown-pages">
                    <NavDropdown.Item href="/login" className="text-wrap">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register" className="text-wrap">Register</NavDropdown.Item>
                    <NavDropdown.Item href="/forgot-password" className="text-wrap">Forgot Password</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Error" className="text-wrap">404 Page</NavDropdown.Item>
                    <NavDropdown.Item href="/blank" className="text-wrap">Blank Page</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/charts" className="d-flex align-items-center px-3 py-2 text-white">
                    <FaChartArea className="me-2" />
                    <span>Charts</span>
                </Nav.Link>
                <Nav.Link href="/tables" className="d-flex align-items-center px-3 py-2 text-white">
                    <FaTable className="me-2" />
                    <span>Tables</span>
                </Nav.Link>
                <hr className="sidebar-divider d-none d-md-block bg-light my-3" />
                <Nav.Item className="text-center d-none d-md-inline">
                    <Button variant="link" className="rounded-circle border-0 mt-3" id="sidebarToggle"></Button>
                </Nav.Item>
                <Nav.Item className="sidebar-card d-none d-lg-flex flex-column align-items-center text-center p-3" style={{ backgroundColor: '#3B5DC0', borderRadius: '10px', margin: '20px 10px' }}>
                    <Image
                        className="sidebar-card-illustration mb-2"
                        src="img/undraw_rocket.svg"
                        alt="Rocket illustration"
                        style={{ width: '80px', height: 'auto' }}
                    />
                    <p className="text-white small mb-2" style={{ fontSize: '0.85rem' }}>
                        <strong className="text-white">SB Admin Pro</strong> is packed with premium features, components, and more!
                    </p>
                    <Button
                        variant="success"
                        size="sm"
                        href="https://startbootstrap.com/theme/sb-admin-pro"
                        className="text-white"
                    >
                        Upgrade to Pro!
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );
}
