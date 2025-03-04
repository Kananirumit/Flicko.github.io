import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Dropdown } from 'react-bootstrap';
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaComments } from "react-icons/fa";


export default function Cards() {
    return (
        <Container fluid>
            <Row className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
            </Row>

            <Row>
                <Col xl={3} md={6} className="mb-4">
                    <Card className="border-left-primary shadow h-100 py-2">
                        <Card.Body>
                            <Row className="no-gutters align-items-center">
                                <Col className="mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </Col>
                                <Col className="col-auto">
                                    <FaCalendarAlt size="40px" color="lightgray" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="mb-4">
                    <Card className="border-left-success shadow h-100 py-2">
                        <Card.Body>
                            <Row className="no-gutters align-items-center">
                                <Col className="mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </Col>
                                <Col className="col-auto">
                                    <FaDollarSign size="40px" color="lightgray" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="mb-4">
                    <Card className="border-left-info shadow h-100 py-2">
                        <Card.Body>
                            <Row className="no-gutters align-items-center">
                                <Col className="mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                                    <Row className="no-gutters align-items-center">
                                        <Col className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </Col>
                                        <Col>
                                            <ProgressBar now={50} className="progress-sm" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="col-auto">
                                    <FaClipboardList size="40px" color="lightgray" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6} className="mb-4">
                    <Card className="border-left-warning shadow h-100 py-2">
                        <Card.Body>
                            <Row className="no-gutters align-items-center">
                                <Col className="mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </Col>
                                <Col className="col-auto">
                                    <FaComments size="40px" color="lightgray" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Header className='text-gray-600'>Default Card Example</Card.Header>
                        <Card.Body className='text-gray-600'>
                            This card uses Bootstrap's default styling with no utility classes added. Global
                            styles are the only things modifying the look and feel of this default card example.
                        </Card.Body>
                    </Card>

                    <Card className="shadow mb-4">
                        <Card.Header className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                        </Card.Header>
                        <Card.Body className='text-gray-600'>
                            The styling for this basic card example is created by using default Bootstrap
                            utility classes. By using utility classes, the style of the card component can be
                            easily modified with no need for any custom CSS!
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                            <Dropdown alignRight>
                                <Dropdown.Toggle as="a" className="text-gray-400">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Header>Dropdown Header:</Dropdown.Header>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className='text-gray-600'>
                            Dropdown menus can be placed in the card header in order to extend the functionality
                            of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                            icon in the card header can be clicked on in order to toggle a dropdown menu.
                        </Card.Body>
                    </Card>

                    <Card className="shadow mb-4">
                        <Card.Header as="a" href="#collapseCardExample" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample" className="d-block py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                        </Card.Header>
                        <div className="collapse show" id="collapseCardExample">
                            <Card.Body className='text-gray-600'>
                                This is a collapsable card example using Bootstrap's built in collapse
                                functionality. <strong className='text-gray-1000'>Click on the card header</strong> to see the card body
                                collapse and expand!
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
