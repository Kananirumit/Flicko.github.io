import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
        return (
                <footer className="bg-white text-center py-3">
                        <Container>
                                <Row>
                                        <Col>
                                                <span>Copyright &copy; Your Website 2021</span>
                                        </Col>
                                </Row>
                        </Container>
                </footer>
        );
}
