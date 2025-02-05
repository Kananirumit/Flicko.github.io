import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function PortfolioOverview() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project One', imageUrl: 'https://dummyimage.com/600x400/343a40/6c757d' },
        { id: 2, name: 'Project Two', imageUrl: 'https://dummyimage.com/600x400/343a40/6c757d' },
        { id: 3, name: 'Project Three', imageUrl: 'https://dummyimage.com/600x400/343a40/6c757d' },
        { id: 4, name: 'Project Four', imageUrl: 'https://dummyimage.com/600x400/343a40/6c757d' },
    ]);

    return (
        <div>
            <section className="py-5">
                <Container className="px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Our Work</h1>
                        <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
                    </div>
                    <Row className="gx-5">
                        {projects.map((project) => (
                            <Col lg={6} key={project.id}>
                                <div className="position-relative mb-5">
                                    <img
                                        className="img-fluid rounded-3 mb-3"
                                        src={project.imageUrl}
                                        alt={project.name}
                                    />
                                    <a
                                        className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                                        href="#!"
                                    >
                                        {project.name}
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className="py-5 bg-light">
                <Container className="px-5 my-5">
                    <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <Button className="btn-lg" variant="primary" href="#!">
                        Contact us
                    </Button>
                </Container>
            </section>
        </div>
    );
}
