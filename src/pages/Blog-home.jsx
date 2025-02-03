import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

export default function Bloghome() {
    const [featuredArticle, setFeaturedArticle] = useState({});
    const [newsArticles, setNewsArticles] = useState([]);
    const [featuredStories, setFeaturedStories] = useState([]);

    useEffect(() => {
        fetchFeaturedArticle();
        fetchNewsArticles();
        fetchFeaturedStories();
    }, []);

    const fetchFeaturedArticle = async () => {
        const data = {
            title: "Article heading goes here",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...",
            imageUrl: "https://dummyimage.com/700x350/343a40/6c757d"
        };
        setFeaturedArticle(data);
    };

    const fetchNewsArticles = async () => {
        const data = [
            { date: "May 12, 2023", title: "Start Bootstrap releases Bootstrap 5 updates for templates and themes" },
            { date: "May 5, 2023", title: "Bootstrap 5 has officially landed" },
            { date: "Apr 21, 2023", title: "This is another news article headline, but this one is a little bit longer" }
        ];
        setNewsArticles(data);
    };

    const fetchFeaturedStories = async () => {
        const data = [
            {
                title: "Blog post title",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imageUrl: "https://dummyimage.com/600x350/ced4da/6c757d",
                author: "Kelly Rowan",
                date: "March 12, 2023",
                readTime: "6 min read"
            },
            {
                title: "Another blog post title",
                description: "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
                imageUrl: "https://dummyimage.com/600x350/adb5bd/495057",
                author: "Josiah Barclay",
                date: "March 23, 2023",
                readTime: "4 min read"
            },
            {
                title: "The last blog post title is a little bit longer than the others",
                description: "Some more quick example text to build on the card title and make up the bulk of the card's content.",
                imageUrl: "https://dummyimage.com/600x350/6c757d/343a40",
                author: "Evelyn Martinez",
                date: "April 2, 2023",
                readTime: "10 min read"
            }
        ];
        setFeaturedStories(data);
    };

    return (
        <div>
            <section className="py-5">
                <Container className="px-5">
                    <h1 className="fw-bolder fs-5 mb-5 mt-5">Company Blog</h1>
                    <Card className="border-0 shadow rounded-3 overflow-hidden">
                        <Card.Body className="p-0">
                            <Row className="gx-0">
                                <Col lg={6} xl={5} className="py-lg-5">
                                    <div className="p-4 p-md-5">
                                        <Badge bg="primary" className="bg-gradient rounded-pill mb-2">News</Badge>
                                        <h2 className="fw-bolder">{featuredArticle.title}</h2>
                                        <p>{featuredArticle.description}</p>
                                        <Button variant="link" className="stretched-link text-decoration-none">
                                            Read more
                                            <i className="bi bi-arrow-right"></i>
                                        </Button>
                                    </div>
                                </Col>
                                <Col lg={6} xl={7}>
                                    <div className="bg-featured-blog" style={{ backgroundImage: `url(${featuredArticle.imageUrl})` }}></div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <section className="py-5 bg-light">
                <Container className="px-5">
                    <Row className="gx-5">
                        <Col xl={8}>
                            <h2 className="fw-bolder fs-5 mb-4">News</h2>
                            {newsArticles.map((article, index) => (
                                <div className="mb-4" key={index}>
                                    <div className="small text-muted">{article.date}</div>
                                    <a className="link-dark" href="#!"><h3>{article.title}</h3></a>
                                </div>
                            ))}
                            <div className="text-end mb-5 mb-xl-0">
                                <a className="text-decoration-none" href="#!">
                                    More news
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <Card className="border-0 h-100">
                                <Card.Body className="p-4">
                                    <div className="d-flex h-100 align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Contact</div>
                                            <p className="text-muted mb-4">
                                                For press inquiries, email us at
                                                <br />
                                                <a href="#!">press@domain.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container className="px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
                    <Row className="gx-5">
                        {featuredStories.map((story, index) => (
                            <Col lg={4} className="mb-5" key={index}>
                                <Card className="h-100 shadow border-0">
                                    <Card.Img variant="top" src={story.imageUrl} alt="..." />
                                    <Card.Body className="p-4">
                                        <Badge bg="primary" className="bg-gradient rounded-pill mb-2">News</Badge>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{story.title}</h5></a>
                                        <p className="card-text mb-0">{story.description}</p>
                                    </Card.Body>
                                    <Card.Footer className="p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="small">
                                                    <div className="fw-bold">{story.author}</div>
                                                    <div className="text-muted">{story.date} &middot; {story.readTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More stories
                            <FaArrowRight />
                        </a>
                    </div>
                </Container>
            </section>
        </div>
    );
}
