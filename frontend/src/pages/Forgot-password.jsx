import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function ForgotPassword() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={10} lg={12} md={9}>
                    <Card className="o-hidden border-0 shadow-lg my-5">
                        <Card.Body className="p-0">
                            <Row>
                                <Col lg={6} className="d-none d-lg-block bg-password-image"></Col>
                                <Col lg={6}>
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p className="mb-4">
                                                We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                                            </p>
                                        </div>
                                        <Form className="user">
                                            <Form.Group>
                                                <Form.Control
                                                    type="email"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    className="form-control-user"
                                                />
                                            </Form.Group>
                                            <Button href="login.html" className="btn-user btn-block" variant="primary">
                                                Reset Password
                                            </Button>
                                        </Form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="/Register">Create an Account!</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/Login">Already have an account? Login!</a>
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
