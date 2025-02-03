import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// Uncomment the import statement below to use the CDN version of Bootstrap if needed
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src="/images/logo/Flicko.png" alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Home" id="home-dropdown">
                            <LinkContainer to="/index.html">
                                <NavDropdown.Item>Home style 1</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/index2.html">
                                <NavDropdown.Item>Home style 2</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="Catalog" id="catalog-dropdown">
                            <LinkContainer to="/catalog1.html">
                                <NavDropdown.Item>Catalog Grid</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/catalog2.html">
                                <NavDropdown.Item>Catalog List</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/details1.html">
                                <NavDropdown.Item>Details Movie</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/details2.html">
                                <NavDropdown.Item>Details TV Series</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/pricing.html">
                            <Nav.Link>Pricing plans</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Pages" id="pages-dropdown">
                            <LinkContainer to="/about.html">
                                <NavDropdown.Item>About us</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/faq.html">
                                <NavDropdown.Item>Help center</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/profile.html">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/actor.html">
                                <NavDropdown.Item>Actor</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/contacts.html">
                                <NavDropdown.Item>Contacts</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/privacy.html">
                                <NavDropdown.Item>Privacy policy</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="More" id="more-dropdown">
                            <LinkContainer to="/signin.html">
                                <NavDropdown.Item>Sign In</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/signup.html">
                                <NavDropdown.Item>Sign Up</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/forgot.html">
                                <NavDropdown.Item>Forgot password</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/404.html">
                                <NavDropdown.Item>404 Page</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
