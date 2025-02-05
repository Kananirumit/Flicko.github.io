import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const initialSections = [
    {
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        title: "Our founding",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
    },
    {
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        title: "Growth & beyond",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
    },
];

const initialTeam = [
    { name: "Ibbie Eckart", role: "Founder & CEO", imgSrc: "https://dummyimage.com/150x150/ced4da/6c757d" },
    { name: "Arden Vasek", role: "CFO", imgSrc: "https://dummyimage.com/150x150/ced4da/6c757d" },
    { name: "Toribio Nerthus", role: "Operations Manager", imgSrc: "https://dummyimage.com/150x150/ced4da/6c757d" },
    { name: "Malvina Cilla", role: "CTO", imgSrc: "https://dummyimage.com/150x150/ced4da/6c757d" },
];

export default function About() {
    const [sections, setSections] = useState(initialSections);
    const [team, setTeam] = useState(initialTeam);

    return (
        <div>
            <header className="py-5">
                <Container className="px-5">
                    <Row className="justify-content-center">
                        <Col lg={8} xxl={6}>
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.
                                </p>
                                <Button variant="primary" size="lg" href="#scroll-target">Read our story</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            {sections.map((section, index) => (
                <section key={index} className={`py-5 ${index % 2 === 0 ? 'bg-light' : ''}`} id="scroll-target">
                    <Container className="px-5 my-5">
                        <Row className="gx-5 align-items-center">
                            <Col lg={6} className={index % 2 === 0 ? '' : 'order-first order-lg-last'}>
                                <Image className="img-fluid rounded mb-5 mb-lg-0" src={section.imgSrc} alt="..." />
                            </Col>
                            <Col lg={6}>
                                <h2 className="fw-bolder">{section.title}</h2>
                                <p className="lead fw-normal text-muted mb-0">{section.text}</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))}
            <section className="py-5 bg-light">
                <Container className="px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team</h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <Row className="gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        {team.map((member, index) => (
                            <Col key={index} className="mb-5 mb-5 mb-xl-0">
                                <div className="text-center">
                                    <Image className="img-fluid rounded-circle mb-4 px-4" src={member.imgSrc} alt="..." />
                                    <h5 className="fw-bolder">{member.name}</h5>
                                    <div className="fst-italic text-muted">{member.role}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}
