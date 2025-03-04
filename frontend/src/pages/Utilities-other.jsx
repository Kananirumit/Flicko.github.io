import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Dropdown, Button } from 'react-bootstrap';

export default function Utilitiesother() {
    return (
        <Container fluid>
            <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
            <p className="mb-4">
                Bootstrap's default utility classes can be found on the official{' '}
                <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework. 
            </p>
            <Row>
                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Overflow Hidden Utility</h6>
                        </Card.Header>
                        <Card.Body>
                            Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Progress Small Utility</h6>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-1 small">Normal Progress Bar</div>
                            <ProgressBar now={75} className="mb-4" />
                            <div className="mb-1 small">Small Progress Bar</div>
                            <ProgressBar now={75} className="progress-sm mb-2" />
                            Use the <code>.progress-sm</code> class along with <code>.progress</code>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown className="no-arrow mb-4">
                                <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                                    Dropdown (no arrow)
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15</div>
                            <hr />
                            <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
