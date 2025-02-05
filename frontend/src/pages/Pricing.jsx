import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheck, FaStar } from "react-icons/fa6";
import { LuX } from "react-icons/lu";

const pricingPlans = [
    {
        name: "Free",
        price: "$0",
        period: "mo.",
        features: [
            { text: "1 user", available: true },
            { text: "5GB storage", available: true },
            { text: "Unlimited public projects", available: true },
            { text: "Community access", available: true },
            { text: "Unlimited private projects", available: false },
            { text: "Dedicated support", available: false },
            { text: "Free linked domain", available: false },
            { text: "Monthly status reports", available: false },
        ],
        buttonVariant: "outline-primary",
        isPopular: false,
    },
    {
        name: "Pro",
        price: "$9",
        period: "mo.",
        features: [
            { text: "5 users", available: true },
            { text: "5GB storage", available: true },
            { text: "Unlimited public projects", available: true },
            { text: "Community access", available: true },
            { text: "Unlimited private projects", available: true },
            { text: "Dedicated support", available: true },
            { text: "Free linked domain", available: true },
            { text: "Monthly status reports", available: false },
        ],
        buttonVariant: "primary",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "$49",
        period: "mo.",
        features: [
            { text: "Unlimited users", available: true },
            { text: "5GB storage", available: true },
            { text: "Unlimited public projects", available: true },
            { text: "Community access", available: true },
            { text: "Unlimited private projects", available: true },
            { text: "Dedicated support", available: true },
            { text: "Unlimited linked domains", available: true },
            { text: "Monthly status reports", available: true },
        ],
        buttonVariant: "outline-primary",
        isPopular: false,
    },
];

export default function Pricing() {
    return (
        <div>
            <section className="bg-light py-5">
                <Container className="px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Pay as you grow</h1>
                        <p className="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
                    </div>
                    <Row className="gx-5 justify-content-center">
                        {pricingPlans.map((plan, index) => (
                            <Col lg={6} xl={4} key={index}>
                                <Card className="mb-5 mb-xl-0">
                                    <Card.Body className="p-5">
                                        <div className={`small text-uppercase fw-bold text-primary mb-2 ${plan.isPopular ? 'd-flex align-items-center' : ''}`}>
                                            {plan.isPopular && <FaStar className="text-warning small me-2" />}
                                            {plan.name}
                                        </div>
                                        <div className="mb-3">
                                            <span className="display-4 fw-bold">{plan.price}</span>
                                            <span className="text-muted">/ {plan.period}</span>
                                        </div>
                                        <ul className="list-unstyled mb-4">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className={`mb-2 ${!feature.available ? 'text-muted' : ''}`}>
                                                    {feature.available ? <FaCheck className="text-primary small me-2" /> : <LuX />}
                                                    {feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="d-grid">
                                            <Button variant={plan.buttonVariant} href="#!">Choose plan</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}
