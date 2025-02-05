import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4100/api/newusers', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = response.data;
            console.log(response);
            if (response.status === 200) {
                setResponseMessage(data.message);
                localStorage.setItem('token', data.token); 
                navigate('/login'); 
            } else {
                setResponseMessage(`Registration failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p className="mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                {responseMessage && <div className="alert alert-info mt-3">{responseMessage}</div>}
            </form>
        </div>
    );
}
