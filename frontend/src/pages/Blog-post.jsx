import React from 'react';
import { Container, Row, Col, Image, Badge, Card, Form, Button } from 'react-bootstrap';

const commentsData = [
    {
        name: "Commenter Name",
        text: "If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.",
        replies: [
            {
                name: "Commenter Name",
                text: "And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors."
            },
            {
                name: "Commenter Name",
                text: "When you put money directly to a problem, it makes a good headline."
            }
        ]
    },
    {
        name: "Commenter Name",
        text: "When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence."
    }
];

const Comment = ({ name, text, replies }) => (
    <div className="d-flex mb-4">
        <Image roundedCircle src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
        <div className="ms-3">
            <div className="fw-bold">{name}</div>
            {text}
            {replies && replies.map((reply, index) => (
                <div className="d-flex mt-4" key={index}>
                    <Image roundedCircle src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                    <div className="ms-3">
                        <div className="fw-bold">{reply.name}</div>
                        {reply.text}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Blogpost() {
    return (
        <Container className="py-5">
            <Row className="gx-5">
                <Col lg={3}>
                    <div className="d-flex align-items-center mt-lg-5 mb-4">
                        <Image roundedCircle src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                        <div className="ms-3">
                            <div className="fw-bold">Valerie Luna</div>
                            <div className="text-muted">News, Business</div>
                        </div>
                    </div>
                </Col>
                <Col lg={9}>
                    <article>
                        <header className="mb-4 mt-5">
                            <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                            <div className="text-muted fst-italic mb-2">January 1, 2023</div>
                            <Badge bg="secondary" className="me-1">Web Design</Badge>
                            <Badge bg="secondary">Freebies</Badge>
                        </header>
                        <figure className="mb-4">
                            <Image fluid rounded src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                            alt="..." />
                        </figure>
                        <section className="mb-5">  
                            <p className="fs-5 mb-4">Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</p>
                            <p className="fs-5 mb-4">Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
                            <p className="fs-5 mb-4">As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
                        </section>
                    </article>
                    <section>
                        <h2 className="fw-bolder mb-4 mt-5">Comments</h2>
                        {commentsData.map((comment, index) => (
                            <Comment key={index} name={comment.name} text={comment.text} replies={comment.replies} />
                        ))}
                        <Form className="mb-4">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Leave a comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}