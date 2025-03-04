import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Error() {
  return (
    <Container fluid className="text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="error mx-auto" data-text="404">404</div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
          <Button href="/Index" variant="link">&larr; Back to Dashboard</Button>
        </Col>
      </Row>
    </Container>
  );
}
