import React from 'react'
import { Container, Row, Col, Card, Button, ProgressBar, Dropdown, DropdownButton } from 'react-bootstrap'
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { Line, Pie } from 'react-chartjs-2';
// import { FaCircle } from "react-icons/fa6";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);


export default function Index() {

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'Earnings ($)',
                data: [0, 10000, 5000, 15000, 10000,20000 ,15000, 25000,20000,30000,25000,40000],
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    const pieChartData = {
        labels:  ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                data: [55, 30, 15],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                borderWidth: 1,
            },
        ],
    };

    const pieChartOptions = {
        plugins: {
            legend: { position: 'bottom' },
        },
    };


    const cardData = [
        {
            title: 'Earnings (Monthly)',
            value: '$40,000',
            icon: <FaCalendarAlt size="40px" color="lightgray" />,
            borderClass: 'border-left-primary',
            textClass: 'text-primary',
        },
        {
            title: 'Earnings (Annual)',
            value: '$215,000',
            icon: <FaDollarSign size="40px" color="lightgray" />,
            borderClass: 'border-left-success',
            textClass: 'text-success',
        },
        {
            title: 'Tasks',
            value: '50%',
            icon: <FaClipboardList size="40px" color="lightgray" />,
            borderClass: 'border-left-info',
            textClass: 'text-info',
        },
        {
            title: 'Pending Requests',
            value: '18',
            icon: <FaComments size="40px" color="lightgray" />,
            borderClass: 'border-left-warning',
            textClass: 'text-warning',
        },
    ];

    return (
        <div>
            <Container fluid>
                <Row className="align-items-center justify-content-between mb-4">
                    <Col className="h3">DashBoard</Col>
                    <Col className="text-end">
                        <Button variant="primary" size="sm" className="shadow-sm">
                            <FaDownload /> Generate Report
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {cardData.map((card, index) => (
                        <Col xl={3} md={6} className="mb-4" key={index}>
                            <Card className={`${card.borderClass} shadow h-100 py-2`}>
                                <Card.Body>
                                    <Row className="no-gutters align-items-center">
                                        <Col className="mr-2">
                                            <div className={`text-xs font-weight-bold ${card.textClass} text-uppercase mb-1`}>
                                                {card.title}
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{card.value}</div>
                                            {card.progress && (
                                                <Row className="no-gutters align-items-center">
                                                    <Col className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{card.value}</div>
                                                    </Col>
                                                    <Col>
                                                        <ProgressBar now={card.progress} className="progress-sm" />
                                                    </Col>
                                                </Row>
                                            )}
                                        </Col>
                                        <Col className="col-auto">
                                            {card.icon}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xl={8} lg={7}>
                        <Card className="shadow mb-4">
                            <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <DropdownButton id="dropdownMenuLink" title={<FaEllipsisV />} align="end">
                                    <Dropdown.Header>Options</Dropdown.Header>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </Card.Header>
                            <Card.Body>
                                <Line data={lineChartData} options={lineChartOptions} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={5}>
                        <Card className="shadow mb-4">
                            <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <DropdownButton id="dropdownMenuLink" title={<FaEllipsisV />} align="end">
                                    <Dropdown.Header>Options</Dropdown.Header>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </Card.Header>
                            <Card.Body>
                                <Pie data={pieChartData} options={pieChartOptions} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="mb-4">
                        <Card className="shadow mb-4">
                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </Card.Header>
                            <Card.Body>
                                <h4 className="small font-weight-bold">
                                    Server Migration <span className="float-right">20%</span>
                                </h4>
                                <ProgressBar now={20} variant="danger" className="mb-4" />
                                <h4 className="small font-weight-bold">
                                    Sales Tracking <span className="float-right">40%</span>
                                </h4>
                                <ProgressBar now={40} variant="warning" className="mb-4" />
                                <h4 className="small font-weight-bold">
                                    Customer Database <span className="float-right">60%</span>
                                </h4>
                                <ProgressBar now={60} className="mb-4" />
                                <h4 className="small font-weight-bold">
                                    Payout Details <span className="float-right">80%</span>
                                </h4>
                                <ProgressBar now={80} variant="info" className="mb-4" />
                                <h4 className="small font-weight-bold">
                                    Account Setup <span className="float-right">Complete!</span>
                                </h4>
                                <ProgressBar now={100} variant="success" />
                            </Card.Body>
                        </Card>
                        <Row>
                            {[
                                { color: 'primary', hex: '#4e73df' },
                                { color: 'success', hex: '#1cc88a' },
                                { color: 'info', hex: '#36b9cc' },
                                { color: 'warning', hex: '#f6c23e' },
                                { color: 'danger', hex: '#e74a3b' },
                                { color: 'secondary', hex: '#858796' },
                                { color: 'light', hex: '#f8f9fc', textColor: 'black' },
                                { color: 'dark', hex: '#5a5c69' },
                            ].map((bg, index) => (
                                <Col lg={6} className="mb-4" key={index}>
                                    <Card className={`bg-${bg.color} text-${bg.textColor || 'white'} shadow`}>
                                        <Card.Body>
                                            {bg.color.charAt(0).toUpperCase() + bg.color.slice(1)}
                                            <div className={`text-${bg.textColor || 'white'}-50 small`}>{bg.hex}</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={6} className="mb-4">
                        <Card className="shadow mb-4">
                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </Card.Header>
                            <Card.Body>
                                <div className="text-center">
                                    <img
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: '25rem' }}
                                        src="img/undraw_posting_photo.svg"
                                        alt="..."
                                    />
                                </div>
                                <p>
                                    Add some quality, svg illustrations to your project courtesy of{' '}
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">
                                        unDraw
                                    </a>
                                    , a constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!
                                </p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                                    Browse Illustrations on unDraw &rarr;
                                </a>
                            </Card.Body>
                        </Card>
                        <Card className="shadow mb-4">
                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </Card.Header>
                            <Card.Body>
                                <p>
                                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classes are used to create custom
                                    components and custom utility classes.
                                </p>
                                <p className="mb-0">
                                    Before working with this theme, you should become familiar with the Bootstrap
                                    framework, especially the utility classes.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
