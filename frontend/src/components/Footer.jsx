import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col xs={12} md={8} lg={12} xl={4} className="order-md-1">
						<div className="footer__logo">
							<Image src="/images/logo/Flicko.png"alt="Logo" fluid />
						</div>
						<p className="footer__tagline">
							Movies & TV Shows, Online cinema, <br /> Movie database HTML Template. <br /> The perfect choice for your project.
						</p>
					</Col>
					<Col xs={12} md={8} lg={6} xl={4} className="order-md-3">
						<Row>
							<Col xs={12}>
								<h6 className="footer__title">Browse</h6>
							</Col>
							<Col xs={6}>
								<ul className="footer__list">
									<li><a href="catalog1.html">Movies</a></li>
									<li><a href="catalog1.html">TV Shows</a></li>
									<li><a href="catalog1.html">Anime</a></li>
									<li><a href="catalog1.html">Cartoons</a></li>
								</ul>
							</Col>
							<Col xs={6}>
								<ul className="footer__list">
									<li><a href="catalog1.html">Netflix</a></li>
									<li><a href="catalog1.html">Marvel</a></li>
									<li><a href="catalog1.html">DC Comics</a></li>
									<li><a href="catalog1.html">Book adaptations</a></li>
								</ul>
							</Col>
						</Row>
					</Col>
					<Col xs={6} md={4} lg={3} xl={2} className="order-md-2">
						<h6 className="footer__title">Resources</h6>
						<ul className="footer__list">
							<li><a href="about.html">About us</a></li>
							<li><a href="pricing.html">Pricing plans</a></li>
							<li><a href="faq.html">Help center</a></li>
							<li><a href="contacts.html">Contacts</a></li>
						</ul>
					</Col>
					<Col xs={6} md={4} lg={3} xl={2} className="order-md-4">
						<h6 className="footer__title">Help</h6>
						<ul className="footer__list">
							<li><a href="terms.html">Terms & Conditions</a></li>
							<li><a href="privacy.html">Privacy Policy</a></li>
							<li><a href="support.html">Support</a></li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
