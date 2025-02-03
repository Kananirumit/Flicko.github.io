import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Card, Form, InputGroup, Navbar } from 'react-bootstrap';
import { BsCollection, BsBuildingsFill, BsToggles2 } from "react-icons/bs";

const features = [
    { icon: <BsCollection />, title: "Featured title", text: "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." },
    { icon: <BsBuildingsFill />, title: "Featured title", text: "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." },
    { icon: <BsToggles2 />, title: "Featured title", text: "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." },
    { icon: <BsToggles2 />, title: "Featured title", text: "Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." }
];

const blogPosts = [
    { imgSrc: "https://dummyimage.com/600x350/ced4da/6c757d", badge: "News", title: "Blog post title", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", author: "Kelly Rowan", date: "March 12, 2023", readTime: "6 min read" },
    { imgSrc: "https://dummyimage.com/600x350/adb5bd/495057", badge: "Media", title: "Another blog post title", text: "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.", author: "Josiah Barclay", date: "March 23, 2023", readTime: "4 min read" },
    { imgSrc: "https://dummyimage.com/600x350/6c757d/343a40", badge: "News", title: "The last blog post title is a little bit longer than the others", text: "Some more quick example text to build on the card title and make up the bulk of the card's content.", author: "Evelyn Martinez", date: "April 2, 2023", readTime: "10 min read" }
];

export default function Index() {
    const [posts, setPosts] = useState(blogPosts);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
            <header className="bg-dark py-5">
                <Container className="px-5">
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={8} xl={7} xxl={6}>
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">A Bootstrap 5 template for modern businesses</h1>
                                <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <Button variant="primary" size="lg" href="#features">Get Started</Button>
                                    <Button variant="outline-light" size="lg" href="#!">Learn More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={5} xxl={6} className="d-none d-xl-block text-center">
                            <Image className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className="py-5" id="features">
                <Container className="px-5 my-5">
                    <Row className="gx-5">
                        <Col lg={4} className="mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0">A better way to start building.</h2>
                        </Col>
                        <Col lg={8}>
                            <Row className="gx-5 row-cols-1 row-cols-md-2">
                                {features.map((feature, index) => (
                                    <Col key={index} className="mb-5 h-100">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">{feature.icon}</div>
                                        <h2 className="h5">{feature.title}</h2>
                                        <p className="mb-0">{feature.text}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="py-5 bg-light">
                <Container className="px-5 my-5">
                    <Row className="gx-5 justify-content-center">
                        <Col lg={10} xl={7}>
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Image className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div className="fw-bold">
                                        Tom Ato
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        CEO, Pomodoro
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section className="py-5">
                <Container className="px-5 my-5">
                    <Row className="gx-5 justify-content-center">
                        <Col lg={8} xl={6}>
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-5">
                        {posts.map((post, index) => (
                            <Col lg={4} className="mb-5" key={index}>
                                <Card className="h-100 shadow border-0">
                                    <Card.Img variant="top" src={post.imgSrc} alt="..." />
                                    <Card.Body className="p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">{post.badge}</div>
                                        <Card.Title as="a" className="text-decoration-none link-dark stretched-link" href="#!">{post.title}</Card.Title>
                                        <Card.Text className="mb-0">{post.text}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Image className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="small">
                                                    <div className="fw-bold">{post.author}</div>
                                                    <div className="text-muted">{post.date} &middot; {post.readTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-3 fw-bold text-white">New products, delivered to you.</div>
                                <div className="text-white-50">Sign up for our newsletter for the latest updates.</div>
                            </div>
                            <div className="ms-xl-4">
                                <InputGroup className="mb-2">
                                    <Form.Control type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                    <Button variant="outline-light" id="button-newsletter" type="button">Sign up</Button>
                                </InputGroup>
                                <div className="small text-white-50">We care about privacy, and will never share your data.</div>
                            </div>
                        </div>
                    </aside>
                </Container>
            </section>
        </div>
    );
}
