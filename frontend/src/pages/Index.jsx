import React from 'react';
import { Container, Row, Col, Button, Tab, Nav, Carousel, Card } from 'react-bootstrap';

export default function Index() {
	return (
		<div>
			<section className="home home--bg">
				<Container>
					<Row>
						<Col xs={12}>
							<h1 className="home__title">
								<b>NEW ITEMS</b> OF THIS SEASON
							</h1>
						</Col>
						<Col xs={12}>
							<Carousel className="home__carousel splide splide--home">
								<Carousel.Item>
									<Card className="item item--big">
										<a href="details1.html" className="item__cover">
											<Card.Img src="img/covers/13.png" alt="" />
											<span className="item__play">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
												</svg>
											</span>
										</a>
										<Card.Body className="item__content">
											<Card.Title>
												<a href="details1.html">The Edge of Tomorrow</a>
											</Card.Title>
											<Card.Text>
												<a href="#">Action</a>
												<a href="#">Sci-Fi</a>
											</Card.Text>
											<span className="item__rate">8.4</span>
										</Card.Body>
									</Card>
								</Carousel.Item>
								{/* Add more Carousel.Items here */}
							</Carousel>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="content">
				<Container>
					<Row>
						<Col xs={12}>
							<h2 className="content__title">Recently Updated</h2>
							<Tab.Container defaultActiveKey="new-items">
								<Nav variant="tabs" className="content__tabs">
									<Nav.Item>
										<Nav.Link eventKey="new-items">New items</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="movies">Movies</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="tv-shows">TV Shows</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="anime">Anime</Nav.Link>
									</Nav.Item>
								</Nav>
								<Tab.Content>
									<Tab.Pane eventKey="new-items">
										<Row>
											<Col xs={12} lg={6} xxl={4}>
												<Card className="item item--list">
													<a href="details1.html" className="item__cover">
														<Card.Img src="img/covers/1.png" alt="" />
														<span className="item__play">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
															</svg>
														</span>
													</a>
													<Card.Body className="item__content">
														<Card.Title>
															<a href="details1.html">The Lost City</a>
														</Card.Title>
														<Card.Text>
															<a href="#">Action</a>
															<a href="#">Triler</a>
														</Card.Text>
														<div className="item__wrap">
															<span className="item__rate">8.4</span>
															<ul className="item__list">
																<li>HD</li>
																<li>16+</li>
															</ul>
														</div>
														<Card.Text className="item__description">
															When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue, she must navigate treacherous terrain and outwit powerful enemies to save her father and uncover the secrets of the lost city.
														</Card.Text>
													</Card.Body>
												</Card>
											</Col>
											{/* Add more items here */}
										</Row>
									</Tab.Pane>
									{/* Add more Tab.Panes here */}
								</Tab.Content>
							</Tab.Container>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="section section--dark">
				<Container>
					<Row>
						<Col xs={12}>
							<h2 className="section__title section__title--carousel">Now Watching</h2>
						</Col>
						<Col xs={12}>
							<Carousel className="section__carousel splide splide--content">
								<Carousel.Item>
									<Card className="item item--carousel">
										<a href="details1.html" className="item__cover">
											<Card.Img src="img/covers/7.png" alt="" />
											<span className="item__play">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
												</svg>
											</span>
										</a>
										<Card.Body className="item__content">
											<Card.Title>
												<a href="details1.html">I Dream in Another Language</a>
											</Card.Title>
											<Card.Text>
												<a href="#">Action</a>
												<a href="#">Triler</a>
											</Card.Text>
											<span className="item__rate">8.4</span>
										</Card.Body>
									</Card>
								</Carousel.Item>
								{/* Add more Carousel.Items here */}
							</Carousel>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="section">
				<Container>
					<Row>
						<Col xs={12}>
							<h2 className="section__title">Select Your Plan</h2>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} lg={4}>
							<Card className="plan">
								<Card.Body>
									<Card.Title className="plan__title">Starter</Card.Title>
									<Card.Text className="plan__price">Free</Card.Text>
									<ul className="plan__list">
										<li>7 days</li>
										<li>720p Resolution</li>
										<li>Limited Availability</li>
										<li>Desktop Only</li>
										<li>Limited Support</li>
									</ul>
									<Button href="signin.html" className="plan__btn">
										Register
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} lg={4}>
							<Card className="plan plan--premium">
								<Card.Body>
									<Card.Title className="plan__title">Premium</Card.Title>
									<Card.Text className="plan__price">$19.99</Card.Text>
									<ul className="plan__list">
										<li>1 Month</li>
										<li>Full HD</li>
										<li>Lifetime Availability</li>
										<li>TV & Desktop</li>
										<li>24/7 Support</li>
									</ul>
									<Button variant="primary" data-bs-toggle="modal" data-bs-target="#plan-modal" className="plan__btn">
										Choose plan
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<Card className="plan">
								<Card.Body>
									<Card.Title className="plan__title">Cinematic</Card.Title>
									<Card.Text className="plan__price">$39.99</Card.Text>
									<ul className="plan__list">
										<li>2 Months</li>
										<li>Ultra HD</li>
										<li>Lifetime Availability</li>
										<li>Any Device</li>
										<li>24/7 Support</li>
									</ul>
									<Button variant="primary" data-bs-toggle="modal" data-bs-target="#plan-modal" className="plan__btn">
										Choose plan
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="section section--bt">
				<Container>
					<Row>
						<Col xs={12} xl={10}>
							<h2 className="section__title">Our Partners</h2>
							<p className="section__text">
								We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you. <a href="contacts.html">Become a partner</a>
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<div className="partners">
								<a href="#" className="partners__item">
									<img src="img/partners/themeforest-light-background.png" alt="" />
								</a>
								<a href="#" className="partners__item">
									<img src="img/partners/audiojungle-light-background.png" alt="" />
								</a>
								<a href="#" className="partners__item">
									<img src="img/partners/codecanyon-light-background.png" alt="" />
								</a>
								<a href="#" className="partners__item">
									<img src="img/partners/photodune-light-background.png" alt="" />
								</a>
								<a href="#" className="partners__item partners__item--prelast">
									<img src="img/partners/activeden-light-background.png" alt="" />
								</a>
								<a href="#" className="partners__item partners__item--last">
									<img src="img/partners/3docean-light-background.png" alt="" />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}
