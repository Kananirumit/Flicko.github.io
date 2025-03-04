import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

const data = [
    { name: 'Thomas', position: 'Senior Javascript Developer', location: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { name: 'Airi', salary: '$169,300', position: 'App Developer', location: 'Washington', age: 24, startDate: '2015/2/02' },
    { name: 'Brielle Williamson', position: 'Integration Specialist', location: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { name: 'Herrod Chandler', position: 'Sales Assistant', location: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
];

export default function Tables() {
    return (
        <div>
            <Container fluid>
                <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                <p className="mb-4">
                    DataTables is a third party plugin that is used to generate the demo table below.
                    For more information about DataTables, please visit the{' '}
                    <a target="_blank" href="https://datatables.net" rel="noopener noreferrer">
                        official DataTables documentation
                    </a>.
                </p>
                <Card className="shadow mb-4">
                    <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <Table bordered id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Location</th>
                                        <th>Age</th>
                                        <th>Start Date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.position}</td>
                                            <td>{item.location}</td>
                                            <td>{item.age}</td>
                                            <td>{item.startDate}</td>
                                            <td>{item.salary}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
