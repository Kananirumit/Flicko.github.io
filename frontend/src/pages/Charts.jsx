import React from 'react';
import { Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Filler, Title, Tooltip, Legend } from 'chart.js';
import { FaEllipsisV } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Filler, Title, Tooltip, Legend);

export default function Charts() {
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Earnings ($)',
                data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
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
        labels: ['Direct', 'Social', 'Referral'],
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
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [4215, 5312  ,6251,7841,9821, 14984,],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barChartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <Container fluid>
            <h1 className="h3 mb-2 text-gray-800">Charts</h1>
            <p className="mb-4">
                Chart.js is a third party plugin that is used to generate the charts in this theme.
                The charts below have been customized - for further customization options, please visit the{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.chartjs.org/docs/latest/">official Chart.js documentation</a>.
            </p>
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
                <Col xl={8} lg={4}>
                    <Card className="shadow mb-4">
                        <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Monthly Sales</h6>
                            <DropdownButton id="dropdownMenuLink" title={<FaEllipsisV />} align="end">
                                <Dropdown.Header>Options</Dropdown.Header>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            </DropdownButton>
                        </Card.Header>
                        <Card.Body>
                            <Bar data={barChartData} options={barChartOptions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

