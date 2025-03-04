import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Register() {
    return (
        <Container>
            <Card className="o-hidden border-0 shadow-lg my-5">
                <Card.Body className="p-0">
                    <Row>
                        <Col lg={5} className="d-none d-lg-block bg-register-image"></Col>
                        <Col lg={7}>
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>

                                <Form className="user">
                                    <Row className="mb-3">
                                        <Col sm={6} className="mb-3 mb-sm-0">
                                            <Form.Group controlId="exampleFirstName">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group controlId="exampleLastName">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="exampleInputEmail" className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email Address"
                                            className="form-control-user"
                                        />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Col sm={6} className="mb-3 mb-sm-0">
                                            <Form.Group controlId="exampleInputPassword">
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group controlId="exampleRepeatPassword">
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Repeat Password"
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="primary" className="btn-user btn-block" href="/Login">
                                        Register Account
                                    </Button>

                                    <hr />

                                    <Button variant="danger" className="btn-user btn-block" href="/Index">
                                    <FaGoogle /> Register with Google
                                    </Button>

                                    <Button variant="primary" className="btn-user btn-block" href="/Index">
                                    <FaFacebookF /> Register with Facebook
                                    </Button>

                                    <hr />

                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <div className="text-center">
                                        <a className="small" href="login.html">
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
