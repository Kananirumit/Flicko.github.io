import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CustomTable() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4100/api/newusers');
            console.log('Fetched Data:', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) return;
    
        try {
            const response = await axios.delete(`http://127.0.0.1:4100/api/newusers/${id}`);
            
            if (response.status === 200) {
                setData(prevData => prevData.filter(item => item._id !== id));
                console.log(`User with ID ${id} deleted successfully.`);
            } else {
                console.error('Failed to delete user:', response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const handleEdit = (id) => {
        navigate(`/edit-user/${id}`);
    };

    return (
        <div style={{ marginTop: '70px', padding: '20px' }}>

            <Button
                onClick={() => navigate('/Register')}
                variant="info"
                size="sm"
                className="mb-3"
            >
                Add User
            </Button>
            <h2 className="text-center mb-4" style={{ color: '#333' }}>User Management</h2>
            <Table striped bordered hover responsive className="custom-table" variant="light">
                <thead className="table-primary">
                    <tr className="text-center">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index} className="align-middle text-center">
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Button
                                        onClick={() => handleEdit(item._id)}
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item._id)}
                                        variant="danger"
                                        size="sm"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}
