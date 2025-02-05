import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:4100/api/newusers/${id}`)
            .then((response) => {
                const data = response.data;
                setUserData({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                });
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:4100/api/newusers/${id}`, userData)
            .then((response) => {
                console.log('User updated successfully:', response.data);
                navigate('/'); 
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Edit User</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update User
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
