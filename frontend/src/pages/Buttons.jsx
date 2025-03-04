import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaCheck, FaInfoCircle, FaTrash, FaFlag, FaArrowRight } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const circleButtons = [
    { variant: 'primary', icon: <FaFacebookF /> },
    { variant: 'success', icon: <FaCheck /> },
    { variant: 'info', icon: <FaInfoCircle /> },
    { variant: 'warning', icon: <IoIosWarning /> },
    { variant: 'danger', icon: <FaTrash /> }
];

const splitButtons = [
    { variant: 'primary', icon: <FaFlag />, text: 'Split Button Primary' },
    { variant: 'success', icon: <FaCheck />, text: 'Split Button Success' },
    { variant: 'info', icon: <FaInfoCircle />, text: 'Split Button Info' },
    { variant: 'warning', icon: <IoIosWarning />, text: 'Split Button Warning' },
    { variant: 'danger', icon: <FaTrash />, text: 'Split Button Danger' },
    { variant: 'secondary', icon: <FaArrowRight />, text: 'Split Button Secondary' },
    { variant: 'light', icon: <FaArrowRight />, text: 'Split Button Light' }
];

export default function Buttons() {
    return (
        <Container fluid>
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
            <Row>
                <Col lg={6}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                        </Card.Header>
                        <Card.Body>
                            <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                            <div className="mb-2">
                                <code>.btn-circle</code>
                            </div>
                            {circleButtons.map((button, index) => (
                                <Button key={index} href="#" variant={button.variant} className="btn-circle mr-1">
                                    {button.icon}
                                </Button>
                            ))}
                            <div className="mt-4 mb-2">
                                <code>.btn-circle .btn-sm</code>
                            </div>
                            {circleButtons.map((button, index) => (
                                <Button key={index} href="#" variant={button.variant} className="btn-circle btn-sm mr-1">
                                    {button.icon}
                                </Button>
                            ))}
                            <div className="mt-4 mb-2">
                                <code>.btn-circle .btn-lg</code>
                            </div>
                            {circleButtons.map((button, index) => (
                                <Button key={index} href="#" variant={button.variant} className="btn-circle btn-lg mr-1">
                                    {button.icon}
                                </Button>
                            ))}
                        </Card.Body>
                    </Card>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                        </Card.Header>
                        <Card.Body>
                            <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                            <p>You can create more custom buttons by adding a new color variable in the <code>_variables.scss</code> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <code>_buttons.scss</code> file.</p>
                            <Button href="#" variant="google" className="btn-block">
                                <i className="fab fa-google fa-fw"></i> .btn-google
                            </Button>
                            <Button href="#" variant="facebook" className="btn-block">
                                <FaFacebookF /> .btn-facebook
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                        </Card.Header>
                        <Card.Body>
                            <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and the markup in the examples below. The examples below also use the <code>.text-white-50</code> helper class on the icons for additional styling, but it is not required.</p>
                            {splitButtons.map((button, index) => (
                                <div key={index} className="my-2">
                                    <Button href="#" variant={button.variant} className="btn-icon-split">
                                        <span className="icon text-white-50">
                                            {button.icon}
                                        </span>
                                        <span className="text">{button.text}</span>
                                    </Button>
                                </div>
                            ))}
                            <div className="mb-4"></div>
                            <p>Also works with small and large button classes!</p>
                            {splitButtons.slice(0, 1).map((button, index) => (
                                <div key={index} className="my-2">
                                    <Button href="#" variant={button.variant} className="btn-icon-split btn-sm">
                                        <span className="icon text-white-50">
                                            {button.icon}
                                        </span>
                                        <span className="text">Split Button Small</span>
                                    </Button>
                                </div>
                            ))}
                            {splitButtons.slice(0, 1).map((button, index) => (
                                <div key={index} className="my-2">
                                    <Button href="#" variant={button.variant} className="btn-icon-split btn-lg">
                                        <span className="icon text-white-50">
                                            {button.icon}
                                        </span>
                                        <span className="text">Split Button Large</span>
                                    </Button>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
