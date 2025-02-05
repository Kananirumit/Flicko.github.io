import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { BsEnvelope } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";


const features = [
    { icon: <IoChatbubbleEllipsesOutline />, title: "Chat with us", text: "Chat live with one of our support specialists." },
    { icon: <IoPeopleOutline />, title: "Ask the community", text: "Explore our community forums and communicate with other users." },
    { icon: <GoQuestion />, title: "Support center", text: "Browse FAQ's and support articles to find solutions." },
    { icon: <BsTelephone />, title: "Call us", text: "Call us during normal business hours at (555) 892-9403." }
];

export default function Contact() {
    return (
        <div>
            <section className="py-5">
                <Container className="px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <BsEnvelope />
                            </div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                        </div>
                        <Row className="gx-5 justify-content-center">
                            <Col lg={8} xl={6}>
                                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name..." required />
                                        <Form.Control.Feedback type="invalid">A name is required.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" required />
                                        <Form.Control.Feedback type="invalid">An email is required.</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Email is not valid.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="tel" placeholder="(123) 456-7890" required />
                                        <Form.Control.Feedback type="invalid">A phone number is required.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" placeholder="Enter your message here..." style={{ height: '10rem' }} required />
                                        <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Alert variant="success" className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </Alert>
                                    <Alert variant="danger" className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </Alert>
                                    <div className="d-grid">
                                        <Button variant="primary" size="lg" id="submitButton" type="submit" disabled>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <Row className="gx-5 row-cols-2 row-cols-lg-4 py-5">
                        {features.map((feature, contact) => (
                            <Col key={contact}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    {feature.icon}
                                </div>
                                <div className="h5 m-2">{feature.title}</div>
                                <p className="text-muted mb-0">{feature.text}</p>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
        </div>
    );
}
