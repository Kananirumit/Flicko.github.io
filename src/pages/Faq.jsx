import React, { useState } from 'react';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const faqData = [
    {
        category: "Account & Billing",
        items: [
            {
                eventKey: "0",
                header: "Accordion Item #1",
                body: "This is the first item's accordion body."
            },
            {
                eventKey: "1",
                header: "Accordion Item #2",
                body: "This is the second item's accordion body."
            },
            {
                eventKey: "2",
                header: "Accordion Item #3",
                body: "This is the third item's accordion body."
            }
        ]
    },
    {
        category: "Website Issues",
        items: [
            {
                eventKey: "0",
                header: "Accordion Item #1",
                body: "This is the first item's accordion body."
            },
            {
                eventKey: "1",
                header: "Accordion Item #2",
                body: "This is the second item's accordion body."
            },
            {
                eventKey: "2",
                header: "Accordion Item #3",
                body: "This is the third item's accordion body."
            }
        ]
    }
];

export default function Faq() {
    const [faqs] = useState(faqData);

    return (
        <div>
            <section className="py-5">
                <Container className="px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Frequently Asked Questions</h1>
                        <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
                    </div>
                    <Row className="gx-5">
                        <Col xl={8}>
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <h2 className="fw-bolder mb-3">{faq.category}</h2>
                                    <Accordion defaultActiveKey="0" className="mb-5">
                                        {faq.items.map(item => (
                                            <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                                                <Accordion.Header>{item.header}</Accordion.Header>
                                                <Accordion.Body>
                                                    <strong>{item.body}</strong>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            ))}
                        </Col>
                        <Col xl={4}>
                            <Card className="border-0 bg-light mt-xl-5">
                                <Card.Body className="p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Have more questions?</div>
                                            <p className="text-muted mb-4">
                                                Contact us at
                                                <br />
                                                <a href="#!">support@domain.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><BsTwitterX /></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><FaFacebook /></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><FaLinkedin /></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><FaYoutube /></a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}
