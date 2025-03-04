import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const textColors = [
    'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400',
    'text-gray-500'];
const colortext = [
    'color-gray-600', 'color-gray-700', 'color-gray-800', 'color-gray-900',
]

const fontSizes = ['text-xs', 'text-lg'];

const bgGradients = [
    'bg-gradient-primary', 'bg-gradient-secondary', 'bg-gradient-success',
    'bg-gradient-info', 'bg-gradient-warning', 'bg-gradient-danger',
    'bg-gradient-light', 'bg-gradient-dark'
];

const bgGrays = [
    'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400',
    'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900'
];

export default function Utilitiescolor() {
    return (
        <Container fluid>
            <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
            <p className="mb-4">
                Bootstrap's default utility classes can be found on the official{' '}
                <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.
            </p>
            <Row>
                <Col lg={4}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </Card.Header>
                        <Card.Body>
                            {textColors.map(color => (
                                <p key={color} className={`${color} p-3 bg-dark m-0`}>{`.${color}`}</p>
                            ))}
                            {colortext.map(color => (
                                <p key={color} className={`${color} p-3 bg-light m-0`}>{`.${color}`}</p>
                            ))}

                        </Card.Body>
                    </Card>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                        </Card.Header>
                        <Card.Body>
                            {fontSizes.map(size => (
                                <p key={size} className={size}>{`.${size}`}</p>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
                        </Card.Header>
                        <Card.Body>
                            {bgGradients.map(gradient => (
                                <div key={gradient} className={`px-3 py-5 ${gradient} text-white`}>{`.${gradient}`}</div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
                        </Card.Header>
                        <Card.Body>
                            {bgGrays.map(gray => (
                                <div key={gray} className={`p-3 ${gray} ${gray.includes('500') || gray.includes('600') || gray.includes('700') || gray.includes('800') || gray.includes('900') ? 'text-white' : ''}`}>{`.${gray}`}</div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
