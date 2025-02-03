import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";

export default function PortfolioItem() {


    const project = {
        title: "Project Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique, ducimus ut alias sit accusamus illum, asperiores deserunt dolorum quaerat qui! Ab, quisquam explicabo magni dolores unde beatae quam a.",
        images: [
            "https://dummyimage.com/1300x700/343a40/6c757d",
            "https://dummyimage.com/600x400/343a40/6c757d",
            "https://dummyimage.com/600x400/343a40/6c757d"
        ],
        additionalDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt architecto enim eos accusantium fugit recusandae illo iste dignissimos possimus facere ducimus odit voluptatibus exercitationem, ex laudantium illum voluptatum corporis."
    };


    return (
        <div>
            <section className="py-5">
                <Container className="px-5 my-5">
                    <Row className="gx-5 justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <h1 className="fw-bolder">{project.title}</h1>
                                <p className="lead fw-normal text-muted mb-0">
                                    {project.description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-5">
                        {project.images.map((image, index) => (
                            <Col key={index} lg={index === 0 ? 12 : 6}>
                                <Image className="img-fluid rounded-3 mb-5" src={image} alt="..." />
                            </Col>
                        ))}
                    </Row>
                    <Row className="gx-5 justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <p className="lead fw-normal text-muted">
                                    {project.additionalDescription}
                                </p>
                                <Button variant="link" href="#!" className="text-decoration-none">
                                    View project
                                    <BsArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
