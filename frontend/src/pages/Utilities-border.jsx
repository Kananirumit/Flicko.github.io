import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Utilitiesborder() {
    return (
        <Container fluid>
            <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
            <p className="mb-4">
                Bootstrap's default utility classes can be found on the official{' '}
                <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.
            </p>
            <Row>
                <Col lg={6}>
                    <Card className="mb-4 py-3 border-left-primary">
                        <Card.Body>.border-left-primary</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-secondary">
                        <Card.Body>.border-left-secondary</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-success">
                        <Card.Body>.border-left-success</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-info">
                        <Card.Body>.border-left-info</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-warning">
                        <Card.Body>.border-left-warning</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-danger">
                        <Card.Body>.border-left-danger</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-left-dark">
                        <Card.Body>.border-left-dark</Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="mb-4 py-3 border-bottom-primary">
                        <Card.Body>.border-bottom-primary</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-secondary">
                        <Card.Body>.border-bottom-secondary</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-success">
                        <Card.Body>.border-bottom-success</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-info">
                        <Card.Body>.border-bottom-info</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-warning">
                        <Card.Body>.border-bottom-warning</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-danger">
                        <Card.Body>.border-bottom-danger</Card.Body>
                    </Card>
                    <Card className="mb-4 py-3 border-bottom-dark">
                        <Card.Body>.border-bottom-dark</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
