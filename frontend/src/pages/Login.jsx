import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={10} lg={12} md={9}>
                    <Card className="o-hidden border-0 shadow-lg my-5">
                        <Card.Body className="p-0">
                            <Row>
                                <Col lg={6} className="d-none d-lg-block bg-login-image"></Col>
                                <Col lg={6}>
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <Form className="user">
                                            <Form.Group>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter Email Address..."
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Remember Me"
                                                    className="custom-control-input"
                                                    id="customCheck"
                                                />
                                            </Form.Group>
                                            <Button variant="primary" className="btn-user btn-block">
                                                Login
                                            </Button>
                                            <hr />
                                            <Button variant="danger" className="btn-user btn-block">
                                                <FaGoogle />    Login with Google
                                            </Button>
                                            <Button variant="primary" className="btn-user btn-block">
                                                <FaFacebookF />   Login with Facebook
                                            </Button>
                                        </Form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="/Forgot-password">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/Register">Create an Account!</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
