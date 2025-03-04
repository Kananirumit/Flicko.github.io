import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav, NavDropdown, Dropdown, Button } from 'react-bootstrap';

export default function UtilitiesAnimation() {
    return (
        <Container fluid>
            <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
            <p className="mb-4">
                Bootstrap's default utility classes can be found on the official{' '}
                <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.
            </p>
            <Row>
                <Col lg={6}>
                    <Card className="position-relative">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utility</h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <code>.animated--grow-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <Navbar expand="lg" bg="light" className="mb-4">
                                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                                <Nav className="ml-auto">
                                    <NavDropdown title="Dropdown" id="navbarDropdown" className="animated--grow-in">
                                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar>
                            <p className="mb-0 small">
                                Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="position-relative">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utility</h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <code>.animated--fade-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <Navbar expand="lg" bg="light" className="mb-4">
                                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                                <Nav className="ml-auto">
                                    <NavDropdown title="Dropdown" id="navbarDropdown" className="animated--fade-in">
                                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar>
                            <div className="small mb-1">Dropdown Button Example:</div>
                            <Dropdown className="mb-4">
                                <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="animated--fade-in" aria-labelledby="dropdownMenuButton">
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p className="mb-0 small">
                                Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
